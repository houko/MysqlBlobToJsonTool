package info.xiaomo.mysqlBlobToJsonTool.controller;

import info.xiaomo.mysqlBlobToJsonTool.stage.ControlledStage;
import javafx.event.ActionEvent;
import javafx.fxml.Initializable;

import java.net.URL;
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
 * Date  : 17/6/9 08:55
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */
public class MainController implements ControlledStage, Initializable {


    private StageController myController;

    public void connectionButtonClicked1(ActionEvent actionEvent) {
    }

    @Override
    public void setStageController(StageController stageController) {
        this.myController = stageController;
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }
}
