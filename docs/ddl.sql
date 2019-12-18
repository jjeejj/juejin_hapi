-- 建表语句

CREATE TABLE shops (
    id INT AUTO_INCREMENT COMMENT '主键，店铺ID',
    name VARCHAR(255) COMMENT '店铺名称',
    thumb_url VARCHAR(255) COMMENT '店铺图片',
    created_at DATETIME COMMENT '记录创建时间',
    updated_at DATETIME COMMENT '记录更新时间'
) ENGINE=Innodb CHARSET=utf8 COMMENT="店铺表";


CREATE TABLE goods (
    id INT AUTO_INCREMENT COMMENT '主键，商品ID',
    name VARCHAR(255) COMMENT '商品名称',
    thumb_url VARCHAR(255) COMMENT '商品图片',
    created_at DATETIME COMMENT '记录创建时间',
    updated_at DATETIME COMMENT '记录更新时间'
) ENGINE=Innodb CHARSET=utf8 COMMENT="商品表";



CREATE TABLE shop_goods (
    id INT AUTO_INCREMENT COMMENT '主键',
    shop_id INT COMMENT '店铺ID',
    goods_id INT COMMENT '商品ID',
) ENGINE=Innodb CHARSET=utf8 COMMENT="店铺商品关联表";