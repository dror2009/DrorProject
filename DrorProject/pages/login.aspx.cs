using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages
{
    public partial class login : System.Web.UI.Page
    {
        public string user = "";
        public string message = "";
        public string sql = "";
        private string dbName = "DB.mdf";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string username = Request.Form["uName"];
                if (HelperA.IsExist(dbName, $"select * from Users where UNAME like N'{username}'"))
                {
                    string password = Request.Form["pwd"];
                    sql = $"select UNAME, PWD from Users where UNAME = N'{username}' and PWD = N'{password}'";
                    if (HelperA.IsExist(dbName, sql))
                    {
                        message = "Welcome, " + username;
                        Session["loggedUser"] = username;
                    }
                    else
                    {
                        message = "Invalid password.";
                        Session["loggedUser"] = null;
                    }
                }
                else
                {
                    message = "Username doesn't exist.";
                    Session["loggedUser"] = null;
                }
            }
        }
    }
}