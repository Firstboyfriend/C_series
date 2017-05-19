using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Common_js_SuperMap_Temp_GIS : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Request.QueryString["action"] != null)
            {
                switch (Request.QueryString["action"].ToString())
                { 
                    case "getAll":
                        getAll();
                        break;
                }
            }
        }
    }


    private void getAll()
    {
        DataTable dt = Get_TempGps();

        StringBuilder re = new StringBuilder();
        re.Append("[");
        int i = 0;
        foreach (DataRow dr in dt.Rows)
        {
            if (i == 0)
                re.Append(",");


            re.AppendFormat("{{'x':{0},'y':{1},'km','{2}'}}",dr["GIS_X"],dr["GIS_Y"],dr["km_mark"]);

            i++;
        }
        re.Append("]");

        Response.Write(re.ToString());
    }


    protected void Button1_Click(object sender, EventArgs e)
    {

        DataTable dt = Get_TempGps();

        for (int i = 0; i < dt.Rows.Count-1; i++)
        {
            int j = i + 1;

            DataRow dr1=dt.Rows[i];
            DataRow dr2=dt.Rows[j];

            int km1 = Convert.ToInt32(dr1["km_mark"]);
            int km2 = Convert.ToInt32(dr2["km_mark"]);

            int diff = km2 - km1;

            updateGPS(km2, diff);

        }

        Response.Write("处理完成");

    }

    public int updateGPS(int km,int diff)
    {
        string sql = "update TEMP_GPS set km_mark_diff='" + diff + "' where km_mark='"+km+"'";
        return DbHelperOra.ExecuteSql(sql);
    }

    public int update_km_mark_diff(int km, int diff)
    {
        string sql = "update TEMP_GPS set km_mark_diff_SM='" + diff + "' where km_mark_sm='" + km + "'";
        return DbHelperOra.ExecuteSql(sql);
    }

    public DataTable Get_TempGps()
    {
        string sql = "select * from TEMP_GPS order by km_mark";
        return DbHelperOra.Query(sql).Tables[0];
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        //超图公里标差
        DataTable dt = Get_TempGps();

        for (int i = 0; i < dt.Rows.Count - 1; i++)
        {
            int j = i + 1;

            DataRow dr1 = dt.Rows[i];
            DataRow dr2 = dt.Rows[j];

            int km1 = Convert.ToInt32(dr1["km_mark_sm"]);
            int km2 = Convert.ToInt32(dr2["km_mark_sm"]);

            int diff = km2 - km1;

            update_km_mark_diff(km2, diff);

        }

        Response.Write("处理完成");
    }
}