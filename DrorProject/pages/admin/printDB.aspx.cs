using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace DrorProject.pages.admin
{
    public partial class printDB : System.Web.UI.Page
    {
        private string dbName = drorCommands.dbName;
        public string UsersHtml = "";
        protected void Page_Load(object sender, EventArgs e)
        {

            drorCommands.adminAccess();
            UsersHtml = GetUsersHtml();

            // Handle form submissions
            if (Request.HttpMethod == "POST")
            {
                string actionType = Request.Form["actionType"];
                string selectedIds = Request.Form["selectedUsers"];

                if (!string.IsNullOrEmpty(selectedIds))
                {
                    switch (actionType)
                    {
                        case "delete":
                            DeleteUsers(selectedIds);
                            break;
                        case "update":
                            UpdateUser(selectedIds);
                            break;
                        case "togglePermissions":
                            TogglePermissions(selectedIds);
                            break;
                    }
                }
            }
            if (IsPostBack)
            {
                filterUsers();
            }
        }
        private void DeleteUsers(string selectedIds)
        {
            string sql = $"DELETE FROM Users WHERE Id IN ({selectedIds})";
            HelperA.DoQuery(dbName, sql);
            Response.Redirect(Request.RawUrl);
        }

        private void UpdateUser(string selectedId)
        {
            string[] userIds = selectedId.Split(','); // Split in case multiple are passed
            string singleUserId = userIds[0]; // Take only the first one

            Session["AdminUpdate"] = singleUserId; // Store only one user ID in session
            DataTable dt = HelperA.ExecuteDataTable(dbName, $"SELECT UNAME FROM Users WHERE Id = {singleUserId}");
            Session["AdminUpdateName"] = dt.Rows[0]["UNAME"].ToString();
            Response.Redirect("~/pages/admin/adminUpd.aspx", false);
            HttpContext.Current.ApplicationInstance.CompleteRequest();
        }

        private void TogglePermissions(string selectedIds)
        {
            string sql = $"UPDATE Users SET USERPERMISSION = CASE WHEN USERPERMISSION = 'admin' THEN '' ELSE 'admin' END WHERE Id IN ({selectedIds})";
            HelperA.DoQuery(dbName, sql);
            Response.Redirect(Request.RawUrl);
        }
        public static string GetUsersHtml()
        {
            string dbName = drorCommands.dbName;
            string sql = "SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users;";
            return drorCommands.GetUsersTable(dbName, sql);
        }
        [WebMethod]
        public static string GetUpdatedUsersHtml()
        {
            return GetUsersHtml();
        }
        private string EscapeSql(string input)
        {
            return input.Replace("'", "''");
        }
        private void filterUsers()
        {
            string filterCase = Request.Form["filterValue"];
            string input;
            switch (filterCase)
            {
                case "Id":
                case "UNAME":
                case "FNAME":
                case "LNAME":
                case "EMAIL":
                case "USERPERMISSION":
                case "PNUM":
                    input = Request.Form["textInput"];
                    UsersHtml = drorCommands.GetUsersTable(dbName,
                        $"SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users WHERE {filterCase} = '{EscapeSql(input)}'");
                    break;

                case "AGE":
                case "YEARBORN":
                    if (!int.TryParse(Request.Form["numberInput"], out int numericInput)) // Validate integer input
                    {
                        UsersHtml = "Invalid number input.";
                        return;
                    }
                    UsersHtml = drorCommands.GetUsersTable(dbName,
                    $"SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users WHERE {filterCase} = {numericInput}");
                    break;

                case "PREFIX":
                    input = Request.Form["prefix"];
                    UsersHtml = drorCommands.GetUsersTable(dbName,
                    $"SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users WHERE {filterCase} = '{EscapeSql(input)}'");
                    break;

                case "CITY":
                    input = Request.Form["city"];
                    UsersHtml = drorCommands.GetUsersTable(dbName,
                    $"SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users WHERE {filterCase} = '{EscapeSql(input)}'");
                    break;

                case "HOBBY":
                    input = Request.Form["hobby"];
                    UsersHtml = drorCommands.GetUsersTable(dbName,
                    $"SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users WHERE {filterCase} = '{EscapeSql(input)}'");
                    break;

                case "GENDER":
                    input = Request.Form["gender"];
                    UsersHtml = drorCommands.GetUsersTable(dbName,
                    $"SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users WHERE {filterCase} = '{EscapeSql(input)}'");
                    break;

                default:
                    UsersHtml = "Invalid filter case.";
                    break;
            }
        }
    }
}