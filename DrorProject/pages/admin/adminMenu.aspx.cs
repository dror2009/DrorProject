using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages.admin
{
    public partial class adminMenu : System.Web.UI.Page
    {
        private string dbName = drorCommands.dbName;
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.adminAccess();
            if (IsPostBack)
            {
                string sql = "TRUNCATE TABLE ChatMessages";
                HelperA.DoQuery(dbName, sql);
            }
        }
    }
}