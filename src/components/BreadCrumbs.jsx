
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="bread-crumbs">
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className='bread-crumbs-route'>
          {index === breadcrumbs.length - 1 ? (
            <span className="active-route">&lt;{crumb}&gt;</span>
          ) : (
            <>
              {crumb}
              <img src="/assets/right-caret.png"/>
            </>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs