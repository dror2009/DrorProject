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
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.adminAccess();
            if (IsPostBack)
            {
                drorCommands.adminAccess();
                string sql = Request.Form["query"];
                string DoSafeQueryMessage = drorCommands.DoSafeQuery(dbName, sql);
                if (DoSafeQueryMessage == "Success")
                {
                    if (isPrintCommand(sql))
                    {
                        message = HelperA.printDataTable(dbName, sql);
                    }
                    else
                    {
                        HelperA.DoQuery(dbName, sql);
                        message = "Success.";
                    }
                }
                else
                {
                    message = DoSafeQueryMessage;
                }
            }
        }

        private bool isPrintCommand(string sql)
        {
            return sql.StartsWith("select", StringComparison.OrdinalIgnoreCase);
        }
    }
}