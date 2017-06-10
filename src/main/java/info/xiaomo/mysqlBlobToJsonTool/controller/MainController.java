package info.xiaomo.mysqlBlobToJsonTool.controller;

import info.xiaomo.mysqlBlobToJsonTool.stage.ControlledStage;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.Initializable;
import javafx.scene.control.ListView;
import javafx.scene.control.TextArea;

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

    public ListView<String> tables;
    public TextArea json;
    public ListView<String> datas;
    private StageController myController;

    ObservableList<String> data = FXCollections.observableArrayList("xiaomo");

    @Override
    public void setStageController(StageController stageController) {
        this.myController = stageController;
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        tables.setItems(data);
        datas.setItems(data);
        tables.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> {
            System.out.println(newValue);
        });
        datas.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> {
            json.setText(String.valueOf(newValue));
        });
    }
}
