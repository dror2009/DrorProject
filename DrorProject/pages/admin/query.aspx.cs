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
        private string dbName = drorCommands.dbName;
        public string message = "";
        public string message2 = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.adminAccess();
            if (IsPostBack)
            {
                drorCommands.adminAccess();
                string sql = Request.Form["query"];
                if (drorCommands.IsValidSQLCommand(dbName, sql))
                {
                    if (isPrintCommand(sql))
                    {
                        message2 = HelperA.printDataTable(dbName, sql);
                    }
                    else
                    {
                        HelperA.DoQuery(dbName, sql);
                        message2 = "Success.";
                    }
                }
            }
        }

        private bool isPrintCommand(string sql)
        {
            return sql.StartsWith("select", StringComparison.OrdinalIgnoreCase);
        }
    }
}