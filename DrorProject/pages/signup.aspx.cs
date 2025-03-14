using DrorProject.App_Start;
using DrorProject.pages.update;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages
{
    public partial class signup : System.Web.UI.Page
    {
        public string message = "no user";
        private string dbName = drorCommands.dbName;
        public string insert = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string username = Request.Form["uName"];
                if (!usernameExists(username))
                {
                    string password = Request.Form["pwd"];
                    string cpwd = Request.Form["pwd1"];
                    if (passwordMatch(password, cpwd))
                    {
                        insert = getSqlInsertCommand();
                        HelperA.DoQuery(dbName, insert);
                        message = "Successfully signed up!";
                    }
                    else
                    {
                        message = "Passwords do not match.";
                    }
                }
                else
                {
                    message = "Username already exists.";
                }

            }
        }
        private string symbolErrorFix(string text)
        {
            return text.Replace("'", "''");
        }
        private bool usernameExists(string username)
        {
            return HelperA.IsExist(dbName, $"SELECT * FROM Users WHERE UNAME COLLATE Hebrew_100_CI_AS = N'{username}'");
        }
        private bool passwordMatch(string string1, string string2)
        {
            return string1.Equals(string2);
        }
        private string getSqlInsertCommand()
        {
            string insert = "";
            string fName = Request.Form["fName"];
            string lName = Request.Form["lName"];
            string email = Request.Form["email"];
            bool gender = bool.Parse(Request.Form["gender"]);
            string prefix = Request.Form["phonePrefix"];
            string phoneNum = Request.Form["phoneNum"];
            string year = Request.Form["yearBorn"];
            string city = Request.Form["city"];
            string hobby = Request.Form["hobby"];
            int age = int.Parse(Request.Form["age"]);
            string username = Request.Form["uName"];
            string password = Request.Form["pwd"];

            username = symbolErrorFix(username);
            password = symbolErrorFix(password);

            insert = $"INSERT INTO Users (UNAME, FNAME, LNAME, PWD, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN) VALUES ";
            insert += $"(N'{username}', N'{fName}', N'{lName}', N'{password}', N'{email}', '{gender}', {age}, N'{prefix}', N'{phoneNum}', N'{city}', N'{hobby}', {year})";

            return insert;
        }
    }
}