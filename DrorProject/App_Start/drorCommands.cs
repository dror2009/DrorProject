using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services.Description;
using System.Web.UI;
using System.Xml.Linq;

namespace DrorProject.App_Start
{
    public class drorCommands
    {
        public static string dbName = "DB.mdf";
        public static void CheckAccess(string dbName)
        {
            if (HttpContext.Current.Session["loggedUser"] == null)
                return;

            string user = HttpContext.Current.Session["loggedUser"].ToString();
            string sql = $"SELECT Id, USERPERMISSION FROM Users WHERE UNAME = N'{user}'";
            DataTable userData = HelperA.ExecuteDataTable(dbName, sql);

            if (userData.Rows.Count > 0)
            {
                string access = userData.Rows[0]["USERPERMISSION"].ToString();
                HttpContext.Current.Session["userAccess"] = access;
                HttpContext.Current.Session["id"] = userData.Rows[0]["id"];
            }
        }
        public static bool isAdmin(string dbName)
        {
            CheckAccess(dbName);
            string access = HttpContext.Current.Session["userAccess"].ToString();
            return access == "admin";
        }
        public static string GetUsersTable(string fileName, string sql)
        {
            DataTable dt = HelperA.ExecuteDataTable(fileName, sql);
            string html = "<table border='1'>";

            // Add header row
            html += "<tr>";
            html += "<th>Select</th>"; // Checkbox column
            foreach (DataColumn col in dt.Columns)
            {
                html += $"<th>{col.ColumnName}</th>";
            }
            html += "</tr>";

            // Add user rows
            foreach (DataRow row in dt.Rows)
            {
                html += "<tr>";
                html += $"<td><input type='checkbox' name='selectedUsers' value='{row["Id"]}'></td>";

                foreach (DataColumn col in dt.Columns)
                {
                    html += $"<td>{row[col].ToString()}</td>";
                }
                html += "</tr>";
            }

            html += "</table>";
            return html;
        }
        public static string DoSafeQuery(string fileName, string sqlCommand)
        {
            try
            {
                HelperA.DoQuery(fileName, sqlCommand);
                return "Success";
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
        }
        public static void isLoggedIn()
        {
            if (HttpContext.Current.Session["loggedUser"] == null)
            {
                HttpContext.Current.Response.Redirect("/pages/accessMessages/notLoggedIn.aspx", true);
                HttpContext.Current.Response.End();
            }
            else return;
        }
        public static void adminAccess()
        {
            if (isAdmin(dbName))
            {
                return;
            }
            else
            {
                HttpContext.Current.Response.Redirect("/pages/accessMessages/noAccess.aspx", true);
                HttpContext.Current.Response.End();
            }
        }
    }
}