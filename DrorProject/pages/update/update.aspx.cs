using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages.update
{
    public partial class update : System.Web.UI.Page
    {
        public string data = "";
        public string message = "";
        private string dbName = drorCommands.dbName;

        public string oldUName;
        public string oldFName;
        public string oldLName;
        public string oldEmail;
        public bool oldGender;
        public string oldPrefix;
        public string oldPhoneNum;
        public string oldYear;
        public string oldCity;
        public string oldHobby;
        public string oldAge;
        public string oldPwd;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["loggedUser"] != null)
            {
                string user = Session["loggedUser"].ToString();
                getOldValues();
                if (IsPostBack)
                {
                    string username = Request.Form["uName"];
                    if (usernameValidation(user, username))
                    {
                        string password = Request.Form["pwd"];
                        string cpwd = Request.Form["pwd1"];
                        if (passwordsMatch(password, cpwd))
                        {
                            string update = getUpdateSqlCommand();
                            HelperA.DoQuery(dbName, update);
                            message = "Successfully updated!";
                            Session["loggedUser"] = username;
                            shouldClear.InnerHtml = "true";
                        }
                        else
                        {
                            message = "Passwords do not match.";
                        }
                    }
                }
            }
            else
            {
                Response.Redirect("~/pages/main.aspx");
            }
        }
        private void getOldValues()
        {
            string user = Session["loggedUser"].ToString();
            string sql = $"SELECT * FROM Users WHERE UNAME = N'{user}'";
            DataTable userData = HelperA.ExecuteDataTable(dbName, sql);

            if (userData.Rows.Count > 0)
            {
                DataRow row = userData.Rows[0];
                oldUName = row["UNAME"].ToString();
                oldFName = row["FNAME"].ToString();
                oldLName = row["LNAME"].ToString();
                oldEmail = row["EMAIL"].ToString();
                oldGender = (bool)row["GENDER"];
                oldAge = row["AGE"].ToString();
                oldPrefix = row["PREFIX"].ToString();
                oldPhoneNum = row["PNUM"].ToString();
                oldCity = row["CITY"].ToString();
                oldHobby = row["HOBBY"].ToString();
                oldYear = row["YEARBORN"].ToString();
                oldPwd = row["PWD"].ToString();
            }
            else return;
        }
        private bool usernameValidation(string sessionUsername, string formUsername)
        {
            return !HelperA.IsExist(dbName, $"select * from Users where UNAME = N'{formUsername}'") || sessionUsername == formUsername;
        }
        private bool passwordsMatch(string password, string cpassword)
        {
            return password == cpassword;
        }
        private string symbolErrorFix(string text)
        {
            return text.Replace("'", "''");
        }
        private string getUpdateSqlCommand()
        {
            string user = Session["loggedUser"].ToString();

            string username = Request.Form["uName"];
            string password = Request.Form["pwd"];
            string fName = Request.Form["fName"];
            string lName = Request.Form["lName"];
            string email = Request.Form["email"];
            bool gender = bool.Parse(Request.Form["gender"]);
            string prefix = Request.Form["phonePrefix"];
            string phoneNum = Request.Form["phoneNum"];
            string city = Request.Form["city"];
            string hobby = Request.Form["hobby"];
            string age = Request.Form["age"];

            username = symbolErrorFix(username);
            password = symbolErrorFix(password);

            string update = $"UPDATE Users SET";
            update += $" UNAME = N'{username}',";
            update += $" FNAME = N'{fName}',";
            update += $" LNAME = N'{lName}',";
            update += $" PWD = N'{password}',";
            update += $" EMAIL = N'{email}',";
            update += $" GENDER = N'{gender}',";
            update += $" AGE = {age},";
            update += $" PREFIX = N'{prefix}',";
            update += $" PNUM = N'{phoneNum}',";
            update += $" CITY = N'{city}',";
            update += $" HOBBY = N'{hobby}'";
            update += $" WHERE UNAME = N'{user}';";
            return update;
        }
    }
}