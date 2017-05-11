'use strict';

angular.module('enterprise-quality').service('CopyrightService', function($http) {
	// todo restful接口通信
    var service = {
        getList: function (param) {
            console.log(param);
            return [
                {
                    "id": "100000",
                    "softwareName": "海康威视xxxxx系统软件V2.0",
                    "abbreviation": "公安集中监控系统",
                    "crNo": "2009xxxxx04",
                    "crDate": "2009-11-3",
                    "crUrl": "http://cert.hikvision.com.cn/xxxxx/page=certDetail.jsp",
                    "crOrganization": "国家版权局",
                    "crSoftwareType": "计算机软件产品",
                    "rgNo": "浙xxx-0000-0000",
                    "rgDate": "2011-1-27",
                    "rgExpiryDate": "2016-1-27",
                    "rgUrl": "http://cert.hikvision.com.cn/HikCert/xxxpage=certDetail.jsp",
                    "rgOrganization": "浙江省经济和信息化委员会",
                    "epNo": "(2010)电检软字0000号",
                    "epDate": "2010-12-2",
                    "epUrl": "http://cert.hikvision.com.cn/xxxxx.jsp",
                    "epOrganization": "浙江省电子信息产品检验所",
                    "cdNo": "(2016)电检软界字0000号",
                    "cdDate": "2016-3-23",
                    "cdUrl": "OA证书系统暂未上传",
                    "cdOrganization": "无",
                    "model": "无",
                    "charge": "无",
                    "createDate": "2016/7/19",
                    "updateDate": "2016/8/23",
                    "operator": "陈晓琳"
                },
                {
                    "id": "100001",
                    "softwareName": "海康威视xxxxx系统软件V2.0",
                    "abbreviation": "公安集中监控系统",
                    "crNo": "2009xxxxx54",
                    "crDate": "2009-11-3",
                    "crUrl": "http://cert.hikvision.com.cn/xxxxx/page=certDetail.jsp",
                    "crOrganization": "国家版权局",
                    "crSoftwareType": "计算机软件产品",
                    "rgNo": "浙xxx-0000-0000",
                    "rgDate": "2011-1-27",
                    "rgExpiryDate": "2016-1-27",
                    "rgUrl": "http://cert.hikvision.com.cn/HikCert/xxxpage=certDetail.jsp",
                    "rgOrganization": "浙江省经济和信息化委员会",
                    "epNo": "(2010)电检软字0000号",
                    "epDate": "2010-12-2",
                    "epUrl": "http://cert.hikvision.com.cn/xxxxx.jsp",
                    "epOrganization": "浙江省电子信息产品检验所",
                    "cdNo": "(2016)电检软界字0000号",
                    "cdDate": "2016-3-23",
                    "cdUrl": "OA证书系统暂未上传",
                    "cdOrganization": "无",
                    "model": "无",
                    "charge": "无",
                    "createDate": "2016/7/19",
                    "updateDate": "2016/8/23",
                    "operator": "陈晓琳"
                },
                {
                    "id": "100002",
                    "softwareName": "海康威视xxxxx系统软件V2.0",
                    "abbreviation": "公安集中监控系统",
                    "crNo": "2009xxxxx21",
                    "crDate": "2009-11-3",
                    "crUrl": "http://cert.hikvision.com.cn/xxxxx/page=certDetail.jsp",
                    "crOrganization": "国家版权局",
                    "crSoftwareType": "计算机软件产品",
                    "rgNo": "浙xxx-0000-0000",
                    "rgDate": "2011-1-27",
                    "rgExpiryDate": "2016-1-27",
                    "rgUrl": "http://cert.hikvision.com.cn/HikCert/xxxpage=certDetail.jsp",
                    "rgOrganization": "浙江省经济和信息化委员会",
                    "epNo": "(2010)电检软字0000号",
                    "epDate": "2010-12-2",
                    "epUrl": "http://cert.hikvision.com.cn/xxxxx.jsp",
                    "epOrganization": "浙江省电子信息产品检验所",
                    "cdNo": "(2016)电检软界字0000号",
                    "cdDate": "2016-3-23",
                    "cdUrl": "OA证书系统暂未上传",
                    "cdOrganization": "无",
                    "model": "无",
                    "charge": "无",
                    "createDate": "2016/7/19",
                    "updateDate": "2016/8/23",
                    "operator": "陈晓琳"
                },
                {
                    "id": "100003",
                    "softwareName": "海康威视xxxxx系统软件V2.0",
                    "abbreviation": "公安集中监控系统",
                    "crNo": "2009xxxxx04",
                    "crDate": "2009-11-3",
                    "crUrl": "http://cert.hikvision.com.cn/xxxxx/page=certDetail.jsp",
                    "crOrganization": "国家版权局",
                    "crSoftwareType": "计算机软件产品",
                    "rgNo": "浙xxx-0000-0000",
                    "rgDate": "2011-1-27",
                    "rgExpiryDate": "2016-1-27",
                    "rgUrl": "http://cert.hikvision.com.cn/HikCert/xxxpage=certDetail.jsp",
                    "rgOrganization": "浙江省经济和信息化委员会",
                    "epNo": "(2010)电检软字0000号",
                    "epDate": "2010-12-2",
                    "epUrl": "http://cert.hikvision.com.cn/xxxxx.jsp",
                    "epOrganization": "浙江省电子信息产品检验所",
                    "cdNo": "(2016)电检软界字0000号",
                    "cdDate": "2016-3-23",
                    "cdUrl": "OA证书系统暂未上传",
                    "cdOrganization": "无",
                    "model": "无",
                    "charge": "无",
                    "createDate": "2016/7/19",
                    "updateDate": "2016/8/23",
                    "operator": "陈晓琳"
                }
            ];
        }
    };
    return service;
});
