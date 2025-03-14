using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace DrorProject.pages.update
{
    public partial class userpage : System.Web.UI.Page
    {
        string access;
        private string dbName = drorCommands.dbName;
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.CheckAccess(dbName);
            if (Session["loggedUser"] == null)
            {
                Response.Redirect("~/pages/main.aspx");
            }
        }
    }
}