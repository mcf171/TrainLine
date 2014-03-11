package cn.com.dao;

import java.util.ArrayList;

import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Catalogue;
import cn.com.model.Course;
import cn.com.model.Coursetype;
import cn.com.model.Position;
import cn.com.model.Positionandcourse;
import cn.com.model.Userandcourse;

/**
 * A data access object (DAO) providing persistence and search support for
 * Course entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Course
 * @author MyEclipse Persistence Tools
 */

public class CourseDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(CourseDAO.class);
	// property constants
	public static final String COURSE_NAME = "courseName";
	public static final String COURSE_SPEAKER = "courseSpeaker";
	public static final String COURSE_INTRO = "courseIntro";
	public static final String COURSE_STATE = "courseState";
	public static final String COURSE_CODE ="courseCode";
	
	protected void initDao() {
		// do nothing
	}

	public Integer save(Course transientInstance) {
		Integer integer = (Integer) getHibernateTemplate().save(
				transientInstance);
		return integer;
	}

	public void delete(Course persistentInstance) {
			this.getHibernateTemplate().delete(persistentInstance);
	}

	public void update(Course course) {
		getHibernateTemplate().saveOrUpdate(course);
	}

	public Course findById(java.lang.Integer id) {
		log.debug("getting Course instance with id: " + id);
		try {
			Course instance = (Course) getHibernateTemplate().get(
					"cn.com.model.Course", id);
			getHibernateTemplate().flush();
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Course instance) {
		log.debug("finding Course instance by example");
		try {
			List results = getHibernateTemplate().findByExample(instance);
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding Course instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Course as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByCourseName(Object courseName) {
		return findByProperty(COURSE_NAME, courseName);
	}

	public List findByCourseSpeaker(Object courseSpeaker) {
		return findByProperty(COURSE_SPEAKER, courseSpeaker);
	}

	public List findByCourseCode(Object coudeCode){
		
		return findByProperty(COURSE_CODE, coudeCode);
	}
	
	public List findByCourseIntro(Object courseIntro) {
		return findByProperty(COURSE_INTRO, courseIntro);
	}

	public List findByCourseState(Object courseState) {
		return findByProperty(COURSE_STATE, courseState);
	}

	public List findAll() {
		log.debug("finding all Course instances");
		try {
			String queryString = "from Course";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Course merge(Course detachedInstance) {
		log.debug("merging Course instance");
		try {
			Course result = (Course) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Course instance) {
		log.debug("attaching dirty Course instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Course instance) {
		log.debug("attaching clean Course instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static CourseDAO getFromApplicationContext(ApplicationContext ctx) {
		return (CourseDAO) ctx.getBean("CourseDAO");
	}

	public List<Course> searchCourses(Course course) {
		String hql = "from Course where 1=1 ";
		if (course.getCourseName() != null) {
			hql += " and courseName like '%" + course.getCourseName() + "%'";
		}
		if (course.getCourseSpeaker() != null
				&& !course.getCourseSpeaker().equals("")) {
			hql += " and courseSpeaker = '" + course.getCourseSpeaker() + "' ";
		}
		if (course.getCourseIntro() != null) {
			hql += " and courseIntro like  '%" + course.getCourseIntro() + "%'";
		}

		List list = null;
		try {
			list = getHibernateTemplate().find(hql);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println(list.size());
		return list;
	}

	public List<Course> fgFindAll() {
		String hql = "from Course where courseState = 1";
		List<Course> list = getHibernateTemplate().find(hql);
		return list;
	}

	public List<Course> findCourseToCenter(String keyWords, String courseType,
			String positionName) {
		List<Course> courses = new ArrayList<Course>();

		String hql = "from Position where positionName = '"
				+ positionName.trim() + "'";
		List<Position> pList = getHibernateTemplate().find(hql);

		if (pList.size() == 1) {
			Integer positionID = pList.get(0).getPositionId();

			if (positionID != null) {
				String hString0 = " ";
				if (courseType.trim().equals("所有")) {
					String hString1 = "from Positionandcourse  where positionId = "
							+ positionID;
					List<Positionandcourse> pList2 = getHibernateTemplate()
							.find(hString1);
					for (int i = 0; i < pList2.size(); i++) {
						String hql2 = "from Course where courseId = "
								+ pList2.get(i).getId().getCourseId()
								+ " and   courseIntro like '%" + keyWords + "%'  and courseState = 1";
						List<Course> cs = getHibernateTemplate().find(hql2);
						for (int j = 0; j < cs.size(); j++) {
							courses.add(cs.get(j));
						}
					}
				} else {
					hString0 = "from Coursetype where coursetypeName = '"
							+ courseType + "' ";
					List<Coursetype> cList = getHibernateTemplate().find(
							hString0);
					if (cList.size() == 1) {
						Integer courseTypeId = cList.get(0).getCourseTypeId();
						String hString1 = "from Positionandcourse  where positionId = "
								+ positionID;
						List<Positionandcourse> pList2 = getHibernateTemplate()
								.find(hString1);
						for (int i = 0; i < pList2.size(); i++) {
							String hql2 = "from Course where courseId = "
									+ pList2.get(i).getId().getCourseId()
									+ " and  courseTypeId = " + courseTypeId
									+ " and courseIntro like '%" + keyWords
									+ "%' and courseState = 1";
							List<Course> cs = getHibernateTemplate().find(hql2);
							for (int j = 0; j < cs.size(); j++) {
								courses.add(cs.get(j));
							}
						}
					}
				}
			}
		}
		return courses;
	}

	public List<Course> fgFindMyAllCourse(Integer userId) {
		List<Course> courses = new ArrayList<Course>();
		if(userId!=null)
		{
			String hql="from Userandcourse where  userId = "+userId;
			List<Userandcourse> userandcourses = getHibernateTemplate().find(hql);
			for (int i = 0; i < userandcourses.size(); i++) {
				Course course =getHibernateTemplate().get(Course.class,userandcourses.get(i).getId().getCourseId());
				course.setIsSelect(1);
				courses.add(course);
			}
		}
		
		return courses;
	}

	public List<Course> fgFindMyAllCourse(Integer userId, Course course) {
		List<Course> courses = new ArrayList<Course>();
		if(userId!=null)
		{
			String hql="from Userandcourse where  userId = "+userId;
			List<Userandcourse> userandcourses = getHibernateTemplate().find(hql);
			for (int i = 0; i < userandcourses.size(); i++) {
				String hql2 ="from Course where courseId = "+userandcourses.get(i).getId().getCourseId()+
						"  and courseName like '%"+course.getCourseName()+"%' " +
						"  and courseSpeaker like '%"+course.getCourseSpeaker()+"%' "+
						"  and courseIntro like '%"+course.getCourseIntro()+"%' ";
				List<Course> cList =getHibernateTemplate().find(hql2);
				for (int j = 0; j < cList.size(); j++) {
					cList.get(j).setIsSelect(1);
					courses.add(cList.get(j));
				}
			}
		}
		return courses;
	}

	public List<Course> fbFindExampleCourse() {
		List<Course> courses = new ArrayList<Course>();
		String hql =" from Course where courseState = 2 ";
		courses = getHibernateTemplate().find(hql);
		return courses;
	}

	public List<Course> fbFindExampleCourse(Course course) {
		List<Course> courses = new ArrayList<Course>();
				
		String hql = "from Course where courseState = 2  and courseName like '%"+course.getCourseName()+"%' " +
				"  and courseSpeaker like '%"+course.getCourseSpeaker()+"%' "+
				"  and courseIntro like '%"+course.getCourseIntro()+"%' ";
		courses = getHibernateTemplate().find(hql);
		
		return courses;
	}

	public List<Catalogue> getCataloguDetail(Integer courseId) {
		String hql ="from Catalogue where courseId = "+courseId + " order by cataloguaWeight ";
		List<Catalogue> catalogues = getHibernateTemplate().find(hql);
		return catalogues;
	}
}
