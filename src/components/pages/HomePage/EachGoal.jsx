// import { Briefcase } from 'lucide';

const EachGoal = ({ serviceNumber, title, content, icon, type }) => {
  return (
    <div data-aos='fade-up' className='col-xl-4 col-lg-6 col-md-6'>
      <div
        className='service-container wow fadeInUp animated'
        data-wow-delay='00ms'
        data-wow-duration='1500ms'
        style={{
          visibility: 'visible',
          animationDuration: '1500ms',
          animationDelay: '0ms',
          animationName: 'fadeInUp',
        }}
      >
        <div className='service-container-overlay'></div>
        <div className='service-number'>
          <span>{serviceNumber}</span>
        </div>
        <div className='service-container-inner'>
          <div className='service-image'>
            <img src='assets/images/icons/service-shape-01.png' alt='shape' />
          </div>
          <div className={`service-icon ${type && 'grid place-items-center'}`}>
            {type ? (
              <i className='fa fa-briefcase text-blue-700'></i>
            ) : (
              <span className={`${icon}`}></span>
            )}
          </div>
          <h5>{title}</h5>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default EachGoal;
