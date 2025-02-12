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
        private string dbName = "DB.mdf";
        public string insert = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string username = Request.Form["uName"];
                if (!HelperA.IsExist(dbName, $"select * from Users where UNAME like N'{username}'"))
                {
                    string password = Request.Form["pwd"];
                    string cpwd = Request.Form["pwd1"];
                    if (password == cpwd)
                    {
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
                        insert = $"INSERT INTO Users (UNAME, FNAME, LNAME, PWD, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN) VALUES";
                        insert += $" (N'{username}',";
                        insert += $" N'{fName}',";
                        insert += $" N'{lName}',";
                        insert += $" N'{password}',";
                        insert += $" N'{email}',";
                        insert += $" N'{gender}',";
                        insert += $" {age},";
                        insert += $" N'{prefix}',";
                        insert += $" N'{phoneNum}',";
                        insert += $" N'{city}',";
                        insert += $" N'{hobby}',";
                        insert += $" {year})";
                        int num = HelperA.DoQuery(dbName, insert);
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
    }
}