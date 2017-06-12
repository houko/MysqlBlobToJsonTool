package info.xiaomo.api.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

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
 * Date  : 17/6/12 10:20
 * desc  :
 * Copyright(©) 2017 by xiaomo.
 */
@Mapper
public interface TableDao {

    /**
     * 查询所有一级论坛目录
     *
     * @return list
     */
    @Select("select loginname from sys_user")
    List<String> findAll();

}
