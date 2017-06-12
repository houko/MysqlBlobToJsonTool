package info.xiaomo.api.controller;

import info.xiaomo.api.service.TableService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
@Api
@RestController
@RequestMapping("/table")
public class TablesController {

    private final
    TableService tableService;

    @Autowired
    public TablesController(TableService tableService) {
        this.tableService = tableService;
    }

    @ApiOperation(value = "查询所有表", notes = "查询所有表", httpMethod = "GET", produces = MediaType
            .APPLICATION_JSON_UTF8_VALUE)
    @RequestMapping("/queryTables")
    public List<String> queryTables() {
        return tableService.queryTable();
    }
}
