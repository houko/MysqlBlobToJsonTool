package info.xiaomo.mysqlBlobToJsonTool.controller;

import info.xiaomo.mysqlBlobToJsonTool.AppMain;
import info.xiaomo.mysqlBlobToJsonTool.db.JdbcTemplate;
import info.xiaomo.mysqlBlobToJsonTool.stage.ControlledStage;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TextField;

import java.net.URL;
import java.sql.SQLException;
import java.util.ResourceBundle;

import static info.xiaomo.mysqlBlobToJsonTool.constant.StageIdConst.loginViewID;
import static info.xiaomo.mysqlBlobToJsonTool.constant.StageIdConst.mainViewID;

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
 * Date  : 17/6/9 20:44
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */
public class LoginController implements ControlledStage, Initializable {

    private StageController myController;

    public TextField ipStr;
    public TextField pwdStr;
    public TextField dbNameStr;
    public TextField userStr;

    private String ip;
    private String userName;
    private String password;
    private String dbName;


    private void init() {
        this.ip = ipStr.getText();
        this.userName = userStr.getText();
        this.password = pwdStr.getText();
        this.dbName = dbNameStr.getText();
    }

    @FXML
    public void connectionButtonClicked() throws SQLException, ClassNotFoundException {
        this.init();
        StageController.jdbcTemplate = new JdbcTemplate(dbName, ip, userName, password);
        AppMain.tables = StageController.jdbcTemplate.queryTables(dbName);
        goToMain();
    }


    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }

    @Override
    public void setStageController(StageController stageController) {
        this.myController = stageController;
    }

    public void goToMain() {
        myController.setStage(mainViewID, loginViewID);
    }
}
