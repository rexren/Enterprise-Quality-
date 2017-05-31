package com.hikvision.rensu.cert.service;

import com.hikvision.rensu.cert.domain.TypeInspection;
import com.hikvision.rensu.cert.repository.TypeInspectionRepository;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by rensu on 17/4/21.
 */
@Service
@Transactional
public class TypeInspectionService {

    private final static Logger logger = LoggerFactory.getLogger(TypeInspectionService.class);

    @Autowired
    private TypeInspectionRepository typeInspectionRepository;

    @Autowired
    private InspectContentService inspectContentService;
    
    public Page<TypeInspection> getInspectionByPage(Integer pageNum, Integer pageSize) {
        int pn = pageNum == null ? 0 : pageNum.intValue() - 1;
        int ps = pageSize == null ? 20 : pageSize.intValue(); // 默认20条/页
        /* 按照更新时间降序排序（从先到后） */
        Pageable page = new PageRequest(pn, ps, new Sort(Direction.DESC, "UpdateAt"));
        return typeInspectionRepository.findAll(page);
    }

    public TypeInspection save(TypeInspection typeInspection) {
        return typeInspectionRepository.save(typeInspection);
    }

    public TypeInspection getTypeInspectionById(Long id) {
        return typeInspectionRepository.findOne(id);
    }

    public void deleteTypeInspection(TypeInspection t){
    	typeInspectionRepository.delete(t);
    }
   
    /**
    * 与数据库中的Inspections比较，如果docNo已经存在，则删除后插入新数据，否则直接使用save方法
    * @param inspections 带插入的List
    * @return void
    */
    public void importInspectionList(List<TypeInspection> inspections){

        //TODO:这里存在一个问题，在数据量大的情况下，大量的查表操作是在循环内，需要优化
        //TODO:导入一个表，一般可以先把现存的那部分先搜索出来，然后更新
    	for(int i = 0; i < inspections.size(); i++){
    		List<TypeInspection> dupItems = typeInspectionRepository.findByDocNo(inspections.get(i).getDocNo());
    		if(dupItems.size()>0){
    			/* delete and insert new one */
    			typeInspectionRepository.delete(dupItems);
        	} 
    		typeInspectionRepository.save(inspections.get(i));
    	}
    }
    
    /**
    * 存储 & （如果文件名为空）删子表
    * @return void
    */
    @Transactional
	public TypeInspection updateTypeInspection(HttpServletRequest request, TypeInspection t) {
    	Long inspectionId = t.getId();
    	String fname = request.getParameter("fileName");
		if (StringUtils.isBlank(fname)){
			t.setDocFilename("");
			inspectContentService.deleteByFK(inspectionId);
		}
		return typeInspectionRepository.save(t);
		
	}

}
