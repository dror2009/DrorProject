using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages.admin
{
    public partial class adminUpd : System.Web.UI.Page
    {
        public string data = "";
        public string message = "";
        private string dbName = "DB.mdf";

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
            drorCommands.CheckAccess(dbName);
            if (Session["AdminUpdate"] != null && Session["AdminUpdateName"] != null && (string)Session["userAccess"]=="admin")
            {
                string user = Session["AdminUpdate"].ToString();
                string sql = $"SELECT * FROM Users WHERE Id = '{user}'";
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
                if (IsPostBack)
                {
                    string username = Request.Form["uName"];
                    if (!HelperA.IsExist(dbName, $"select * from Users where UNAME = N'{username}'") || oldUName == username)
                    {
                        string password = Request.Form["pwd"];
                        string cpwd = Request.Form["pwd1"];
                        if (password == cpwd)
                        {
                            string fName = Request.Form["fName"];
                            string lName = Request.Form["lName"];
                            string email = Request.Form["emmail"];
                            bool gender = bool.Parse(Request.Form["gender"]);
                            string prefix = Request.Form["phonePrefix"];
                            string phoneNum = Request.Form["phoneNum"];
                            string city = Request.Form["citty"];
                            string hobby = Request.Form["hobby"];
                            string age = Request.Form["mage"];

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
                            update += $" WHERE Id = '{user}';";
                            int num = HelperA.DoQuery(dbName, update);
                            message = "Successfully updated!";
                            Session["AdminUpdate"] = null;
                            Session["AdminUpdateName"] = null;
                            Response.Redirect("~/pages/admin/printDB.aspx");
                        }
                        else
                        {
                            message = "Wrong password.";
                        }
                    }
                }
            }
            else
            {
                Response.Redirect("~/pages/main.aspx");
            }
        }
    }
}