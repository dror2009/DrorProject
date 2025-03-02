
using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for Helper
/// </summary>
public class HelperA
{

	public static SqlConnection ConnectToDb(string fileName)
	{
        
        string connString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\"
                                        + fileName + ";Integrated Security=True";   // The Data Base is in the App_Data = |DataDirectory|

        SqlConnection conn = new SqlConnection(connString);
        return conn;
	}
    public static  int DoQuery(string fileName, string sql)
    {
        SqlConnection conn = ConnectToDb(fileName);
        conn.Open();
        SqlCommand com = new SqlCommand(sql, conn);
        int num = com.ExecuteNonQuery();
        conn.Close();
        return num;
    }
    public static bool IsExist(string fileName, string sql)
    {
       
        SqlConnection conn = ConnectToDb(fileName);
        conn.Open();
        SqlCommand com = new SqlCommand(sql,conn);
        SqlDataReader data = com.ExecuteReader();   
        
        bool found =Convert.ToBoolean(data.Read());
        conn.Close();
        return found;
         
    }
    public static DataTable ExecuteDataTable(string fileName, string sql)
    {
        SqlConnection conn = ConnectToDb(fileName);
        conn.Open();
        DataTable dt = new DataTable();
        SqlDataAdapter tableAdapter = new SqlDataAdapter(sql, conn);
        tableAdapter.Fill(dt);
        conn.Close() ;
        return dt;
    }
    /// <summary>
    /// הפעולה מקבלת שם קובץ ומשפט לחיפוש ערך - מחזירה מחרוזת המכילה טבלה בפורמט
    /// html
    /// המכילה את נתוני הטבלה מבסיס הנתונים
    /// </summary>
    /// <param name="fileName">נתיב לבסיס הנתונים</param>
    /// <param name="sql">שאילתת אחזור לביצוע כמחרוזת</param>
    /// <returns>טבלה כמחרוזת להצגה בדפדפן</returns>
    public static string printDataTable(string fileName, string sql)//הפעולה מקבלת שם קובץ ומשפט בחירת נתון ומחזירה אמת אם הנתונים קיימים ושקר אחרת
    {
        DataTable dt = ExecuteDataTable(fileName, sql);
        string printStr = "<table border=1>";
        printStr += "<tr>";
        foreach (DataColumn col in dt.Columns)
        {
            printStr += $"<th>{col.ColumnName}</th>";
        }
        printStr += "</tr>";
        foreach (DataRow row in dt.Rows)
        {
            printStr += "<tr>";
            foreach (object myItemArray in row.ItemArray)
            {
                printStr += "<td>" + myItemArray.ToString() + "</td>";
            }
            printStr += "</tr>";
        }
        printStr += "</table>";
        return printStr;
    }
}


