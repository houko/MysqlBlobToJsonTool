package info.xiaomo.api.controller;

import info.xiaomo.api.base.Result;
import info.xiaomo.api.db.JdbcTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 * <p>
 * author: xiaomo
 * github: https://github.com/xiaomoinfo
 * email : xiaomo@xiamoo.info
 * QQ    : 83387856
 * Date  : 17/6/12 10:29
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */

@RestController
public class TablesController {

    private static JdbcTemplate template;

    private static String dbName;

    private static boolean isLogin = false;

    /**
     * @param databaseName
     * @param ip
     * @param userName
     * @param password
     * @return
     */
    @RequestMapping("/login")
    public Result<Boolean> login(@RequestParam String databaseName, @RequestParam String ip, @RequestParam String userName, @RequestParam String password) {
        try {
            dbName = databaseName;
            template = new JdbcTemplate(databaseName, ip, userName, password);
        } catch (Exception e) {
            return new Result<>(false);
        }
        isLogin = true;
        return new Result<>(true);
    }

    /**
     * 登出
     *
     * @return
     */
    @RequestMapping("/logout")
    public Result<Boolean> logout() {
        isLogin = false;
        template = null;
        return new Result<>(true);
    }

    /**
     * 查询所有的表
     *
     * @return
     */
    @RequestMapping("/queryTables")
    public Result<List<String>> queryTables() {
        if (isLogin) {
            List<String> strings = template.queryTables(dbName);
            return new Result<>(strings);
        }
        return null;
    }


    /**
     * 查询所有的表
     *
     * @return
     */
    @RequestMapping("/queryDataList/{tableName}")
    public Result<List<String>> queryDataList(@PathVariable String tableName) {
        if (isLogin) {
            List<String> strings = template.queryDataList(tableName);
            return new Result<>(strings);
        }
        return null;
    }

    /**
     * 查询所有的表
     *
     * @return
     */
    @RequestMapping("/queryData/{tableName}/{id}")
    public Result<String> queryDataList(@PathVariable String tableName, @PathVariable String id) {
        if (isLogin) {
            String s = template.queryData(tableName, id);
            return new Result<>(s);
        }
        return null;
    }


//    public static void main(String[] args) {
//        login("codex_game", "106.15.188.160", "codex_game", "xiaomo");
//        System.out.println(JSON.toJSONString(queryTables()));
//    }

}
