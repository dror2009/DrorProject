using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages.admin
{
    public partial class printDB : System.Web.UI.Page
    {
        public string dbName = "DB.mdf";
        string access;
        public string Users = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["loggedUser"] != null)
            {
                string user = Session["loggedUser"].ToString();
                string sql = $"SELECT USERPERMISSION FROM Users WHERE UNAME = N'{user}'";
                DataTable userData = HelperA.ExecuteDataTable(dbName, sql);
                if (userData.Rows.Count > 0)
                {
                    DataRow row = userData.Rows[0];
                    access = row["USERPERMISSION"].ToString();
                }
                if (access.Equals("admin"))
                {
                    sql = $"SELECT * FROM Users";
                    Users = HelperA.printDataTable(dbName, sql);
                }
                else
                {
                    Response.Redirect("~/pages/main.aspx");
                }
            }
            else
            {
                Response.Redirect("~/pages/main.aspx");
            }
        }
    }
}