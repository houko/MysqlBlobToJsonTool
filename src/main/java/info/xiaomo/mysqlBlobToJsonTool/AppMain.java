package info.xiaomo.mysqlBlobToJsonTool;

import info.xiaomo.mysqlBlobToJsonTool.controller.StageController;
import javafx.application.Application;
import javafx.collections.ObservableList;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

import static info.xiaomo.mysqlBlobToJsonTool.constant.StageIdConst.loginViewID;
import static info.xiaomo.mysqlBlobToJsonTool.constant.StageIdConst.mainViewID;
import static info.xiaomo.mysqlBlobToJsonTool.constant.StageRes.loginViewRes;
import static info.xiaomo.mysqlBlobToJsonTool.constant.StageRes.mainViewRes;

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
 * Date  : 17/6/6 16:14
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */
public class AppMain extends Application {
    public static ObservableList<String> tables;

    private StageController stageController;

    @Override
    public void start(Stage primaryStage) throws Exception {

        //新建一个StageController控制器
        stageController = new StageController();

        //将主舞台交给控制器处理
        stageController.setPrimaryStage("primaryStage", primaryStage);

        //加载两个舞台，每个界面一个舞台
        stageController.loadStage(loginViewID, loginViewRes, StageStyle.DECORATED);
        stageController.loadStage(mainViewID, mainViewRes);

        //显示MainView舞台
        stageController.setStage(loginViewID);
    }


    public static void main(String[] args) {
        launch(args);
    }
}

