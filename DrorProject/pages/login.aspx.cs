using DrorProject.App_Start;
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
        private string dbName = drorCommands.dbName;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.HttpMethod == "POST")
            {
                string username = Request.Form["uName"];
                if (usernameExists(username))
                {
                    string password = Request.Form["pwd"];
                    if (passwordMatchUsername(username, password))
                    {
                        loginSuccess(username);
                        shouldClear.InnerHtml = "true";
                    }
                    else
                    {
                        loginFailed("pwd");
                        shouldClear.InnerHtml = "false"; 
                    }
                }
                else
                {
                    loginFailed("username");
                    shouldClear.InnerHtml = "false";
                }
            }
        }
        private bool usernameExists(string username)
        {
            username = symbolErrorFix(username);
            return HelperA.IsExist(dbName, $"select * from Users where UNAME like N'{username}'");
        }
        private bool passwordMatchUsername(string username, string password)
        {
            username = symbolErrorFix(username);
            password = symbolErrorFix(password);

            string sql = $"select UNAME, PWD from Users where UNAME = N'{username}' and PWD = N'{password}'";

            return HelperA.IsExist(dbName, sql);
        }
        private void loginSuccess(string username)
        {
            if (username.Length < 3)
            {
                message = "Invalid username.";
                return;
            }
            message = "Welcome, " + username;
            Session["loggedUser"] = username;
            drorCommands.CheckAccess(dbName);
        }
        private void loginFailed(string failCase)
        {
            switch (failCase)
            {
                case "pwd":
                    message = "Invalid password.";
                    break;
                case "username":
                    message = "Username doesn't exist.";
                    break;
                default:
                    message = "Unknown login error.";
                    break;
            }
            Session["loggedUser"] = null;
        }
        private string symbolErrorFix(string text)
        {
            return text.Replace("'", "''");
        }
    }
}