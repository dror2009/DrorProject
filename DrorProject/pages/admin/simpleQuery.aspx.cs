using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace DrorProject.pages.admin
{
    public partial class simpleQuery : System.Web.UI.Page
    {
        public string message = "";
        private string dbName = drorCommands.dbName;
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.adminAccess();
            if (Request.HttpMethod == "POST")
            {
                string cmd = Request.Form["command"];
                string field = Request.Form["field"];
                string inp = Request.Form["inp"];
                string inp2 = Request.Form["inp2"];
                string sql;
                if (string.IsNullOrWhiteSpace(inp))
                {
                    message = "You must enter an input.";
                }
                else
                {
                    if (cmd == "select")
                    {
                        string sqlStart = "select Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION from Users";
                        if (field == "YEARBORN" || field == "Id" || field == "GENDER" || field == "PREFIX")
                        {
                            sql = $"{sqlStart} where {field} like '{inp}'";
                        }
                        else if (field == "EMAIL" || field == "HOBBY")
                        {
                            sql = $"{sqlStart} where {field} like '%{inp}%";
                        }
                        else
                        {
                            sql = $"{sqlStart} where {field} like '{inp}%'";
                        }
                        string safeQueryMsg = drorCommands.DoSafeQuery(dbName, sql);
                        if (safeQueryMsg == "Success")
                        {
                            message = HelperA.printDataTable(dbName, sql);
                        }
                        else
                        {
                            message = safeQueryMsg;
                        }
                    }
                    else if (cmd == "update")
                    {
                        if (!string.IsNullOrWhiteSpace(inp2))
                        {
                            sql = $"update Users set {field} = '{inp}' where {field} = '{inp2}'";
                            message = drorCommands.DoSafeQuery(dbName, sql);
                        }
                        else
                        {
                            message = "You must enter an input in both fields for the \"update\" command.";
                        }
                    }
                    else if (cmd == "delete")
                    {
                        sql = $"delete from Users where {field} = '{inp}'";
                        message = drorCommands.DoSafeQuery(dbName, sql);
                    }
                }
            }
        }
    }
}