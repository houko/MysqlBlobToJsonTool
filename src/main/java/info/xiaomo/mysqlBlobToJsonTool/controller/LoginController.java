package info.xiaomo.mysqlBlobToJsonTool.controller;

import info.xiaomo.mysqlBlobToJsonTool.AppMain;
import info.xiaomo.mysqlBlobToJsonTool.stage.ControlledStage;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

import java.net.URL;
import java.sql.SQLException;
import java.util.ResourceBundle;

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
    @FXML
    public Button connectionButton;
    public TextField ipStr;
    public TextField pwdStr;
    public TextField portStr;
    public TextField userStr;


    @FXML
    public void connectionButtonClicked() throws SQLException, ClassNotFoundException {
        goToMain();
//        Class.forName("com.mysql.jdbc.Driver");
//        Connection conn = DriverManager.getConnection(ipStr.getText(), userStr.getText(), pwdStr.getText());
//        Statement statement = conn.createStatement();
//        String sql = "show datatables";
//        ResultSet rs = statement.executeQuery(sql);
//        while (rs.next()) {
//            System.out.println(rs.getString("name"));
//        }

    }


    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }

    @Override
    public void setStageController(StageController stageController) {
        this.myController = stageController;
    }

    public void goToMain() {
        myController.setStage(AppMain.mainViewID);
    }
}
