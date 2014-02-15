package cn.com.sort;

import java.util.Comparator;

import cn.com.model.Questionnairerubric;

public class QuestionnaireRubricSort implements Comparator{

	
	
	public QuestionnaireRubricSort() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int compare(Object o1, Object o2) {
		// TODO Auto-generated method stub
		if(o1 == null){   
            return (o2 == null) ? 0 : 1;   
        }   
        if(o2 == null){   
            return -1;   
        }
        int cc = 0;
        if (o1 instanceof Questionnairerubric && o2 instanceof Questionnairerubric) {
            
            cc = (((Questionnairerubric)o1).getQuestionnaireRubricId()).compareTo(((Questionnairerubric)o2).getQuestionnaireRubricId());
        }
        return ((cc < 0) ? -1 : (cc > 0) ? 1 : 0);
	}

}
