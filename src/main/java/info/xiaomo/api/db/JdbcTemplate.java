package info.xiaomo.api.db;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 * <p>
 * author: xiaomo
 * github: https://github.com/xiaomoinfo
 * email : xiaomo@xiaomo.info
 * QQ    : 83387856
 * Date  : 17/6/23 17:02
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */
public class JdbcTemplate {

    private Connection conn = null;
    private Statement st = null;
    private ResultSet rs = null;

    public JdbcTemplate(String databaseName, String ip, String userName, String password) {
        try {
            //写入驱动所在处，打开驱动
            Class.forName("com.mysql.jdbc.Driver").newInstance();
//            Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
            //数据库，用户，密码，创建与具体数据库的连接
            conn = DriverManager.getConnection("jdbc:mysql://" + ip + ":3306/" + databaseName, userName, password);
            //创建执行sql语句的对象
            st = conn.createStatement();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public String query(String sqlStatement, int n) {
        String result = "";
        try {
            rs = st.executeQuery(sqlStatement);
            while (rs != null && rs.next()) {
                result = rs.getString(n);
                //列的记数是从1开始的，这个适配器和C#的不同
            }

            if (rs != null) {
                rs.close();
            }
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public List<Object> queryList(String sql) {
        PreparedStatement pstmt;
        List<Object> ret = new ArrayList<>();
        try {
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                ret.add(rs.getString(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ret;
    }


    public List<String> queryTables(String dbName) {
        PreparedStatement pstmt;
        List<String> ret = new ArrayList<>();

        try {
            String sql = "Select Table_Name From Information_Schema.Tables Where Table_Schema = '" + dbName + "'";
            System.out.println(sql);
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                ret.add(rs.getString(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ret;
    }

    public int query(String sqlStatement) {
        int row = 0;
        try {
            row = st.executeUpdate(sqlStatement);
            this.close();
            return row;
        } catch (Exception e) {
            e.printStackTrace();
            this.close();
            return row;
        }
    }

    public void close() {
        try {
            if (rs != null)
                this.rs.close();
            if (st != null)
                this.st.close();
            if (conn != null)
                this.conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
