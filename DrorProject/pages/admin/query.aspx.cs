using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages.admin
{
    public partial class query : System.Web.UI.Page
    {
        private string dbName = "DB.mdf";
        public string message = "";
        public string message2 = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.CheckAccess(dbName);
            string access = (string)Session["userAccess"];
            if (!access.Equals("admin"))
            {
                Response.Redirect("~/pages/main.aspx");
            }
            if (IsPostBack)
            {
                drorCommands.CheckAccess(dbName);
                access = (string)Session["userAccess"];
                if (access.Equals("admin"))
                {
                    string sql = Request.Form["query"];
                    if (drorCommands.IsValidSQLCommand(dbName, sql))
                    {
                        if (sql.StartsWith("select", StringComparison.OrdinalIgnoreCase))
                        {
                            message2 = HelperA.printDataTable(dbName, sql);
                        }
                        else
                        {
                            HelperA.DoQuery(dbName, sql);
                            message2 = "Success.";
                        }
                    }
                    else
                    {
                        message = "Invalid SQL command.";
                    }
                }
                else
                {
                    Response.Redirect("~/pages/main.aspx");
                }
            }
        }
    }
}