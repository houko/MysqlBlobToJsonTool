package info.xiaomo.api.service.impl;

import info.xiaomo.api.dao.TableDao;
import info.xiaomo.api.service.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
 * Date  : 17/6/12 10:50
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */
@Service
public class TableServiceImpl implements TableService {

    private final TableDao dao;

    @Autowired
    public TableServiceImpl(TableDao dao) {
        this.dao = dao;
    }

    @Override
    public List<String> queryTable() {
        return dao.findAll();
    }
}
