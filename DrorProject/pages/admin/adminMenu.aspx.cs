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
        private string dbName = "DB.mdf";
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.CheckAccess(dbName);
            string access = (string)Session["userAccess"];
            if (!access.Equals("admin"))
            {
                Response.Redirect("~/pages/main.aspx");
            }
        }
    }
}