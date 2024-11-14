import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  return (
    <>
      <h1 className="title" >Shop</h1>
      {/* //////////////////////////////////////////// */}
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card"  >
      <div className="card-body" >
        <h2 className="card-title">Mobile</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1Du163lWirdyScfJ7W74LTMerWCq6560Kw&s" alt=""  />
      <h5>The best phones in the world today</h5>
      <Link to="/mobile">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Sport</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3JZfWNz3HtVmFiFE0bBJPWHz2_xAvSZ5bg&s" alt=""  />
      <h5>The best sports accessories in the world</h5>
      <Link to="/sport">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Furniture</h2>
        <h5>The best furniture in the world</h5>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdnU4sXnVwg-EIHmipXqvkWoTRw01X0lorw&s" alt=""  />
        <Link to="/Furniture">
        <a href="#" className="btn btn-primary">More...</a>
        </Link >
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Clothes</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7lrfQ2sNxtJ5GLK30hlCDr41-_epO0Fu8g&s" alt=""  />
      <h5>The best Clothes in the world</h5>
      <Link to="/clothes">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Glasses</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0T8CCTpNVl8PBpHLJX3mskcZ3U-LQ_N9QA&s" alt=""  />
      <h5>The best Glasses in the world</h5>
      <Link to="/glasses">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Scarf</h2>
      <img src="https://cdnimg.wisgoon.com/dzE-5eA0SXW29AQorQ_qmd_jIw_jxaOrFfSz7OvKLzw/fill/500/500/no/1/aHR0cHM6Ly9pcnMwMS53aXNnb29uLmNvbS9pcnMwMS82Ny9lNS8xMC8wMS9pcnMwMV9zM29sZF8xNTk3MDM2MTA2MjY5MDk4NDE3LmpwZw.webp" alt=""  />
      <h5>The best Scarf in the world</h5>
      <Link to="/scarf">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Household appliances</h2>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhEVFRUWFRUYFRUWGBUWFxMVFxUWFhUXFhUYHSggGBslGxcYITEhJSktLi4uGB8zODMtNygtLisBCgoKDQ0NFQ8PFS0ZFRkrKy0tKzctLTctLSsrKy0rKy0rKystKy0rLS0rKysrKysrKysrKy0rKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAQL/xABCEAABAwIDBAgBCgUBCQAAAAABAAIDBBEFITESQVFhBgcTIjJxgZGhFEJScoKSorHR8CMzYsHhowgVQ2Nzs8LS8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABEUH/2gAMAwEAAhEDEQA/AN4oiICIiAiIgIiICIiAiIgIiIIj1qYj2OHyN2g10xbC06W2z3z6MDitYdUOG9viXaltmwNfKRwe4GJg/FKR9ULO9d2K3ligBB7ON0jm/SdJ3Gi+47AkPHNZjqQwrs6SWc6yy7LTbMxwjY/7nan1V4nWx0RFAREQEREBERAXoXi9RRERAREQEREBERAREQEREBERAREQERYfphiRpqKeUeJsZDOcju6wfeIQaE6b4maismlbdwdK4tbbMthHZxbPEOI/EugOjWGClpIKcf8ACiY0ni4DvH1dc+q0N0Fw35TiUEfiax7XOvrsQASG/H+J2Q9V0YrUgiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAtZ9dOMtZFFT7WZcJZLXGy1txGSeb8/sFbMXOHWTVmor5HuNxtujaLaNicYwPUgu9VYlTTqMwy5nqiNwiabaF57aW3vEPsrbahXVFh3Y4cx5Henc6Y/VcdmL/Taw+qmqUgiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCyxqt7Cnll+hG5w5kDIe9lzFLE+preyaSXExwgjfJM8Au9Non0W9etbEhFSBl/5j8/qR/xHfENHqtY9SOGGoru3e24jEk5vue8mOIexkI+qrErftJTtjYyNgs1jWtaOAaAB8AqyIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiL4lkDWlzjYNBJPAAXKDSPXpipdIYmnwtZEB/XIduT8OyFKupDCRFRyTWzmk2W/8ATh/htH3+0PqtQ9LcQdUVoNiTd8pb/XIT2bfPwhdJ9HMMFLSwU4z7KJjCfpODRtO9Tc+qqMkiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAo31hV/ZUUgvYy2iH2vH+AOUkWpOvLGdhojB/lxlx+vIdhnqAHfeQQPq2ofluKscRdvbGU3z/h042m/wCp2Y9V0utO/wCz7g+y2eoI0DIG+dhLLbz24x9lbiVqQREUURYnHeklLRgGomawu8LM3Pf9WNoLnegXzhfSalqLbElidGvBY72OvogzCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLmjrQxT5RVnPuvlc7l2cQ2G+4bddA9K6/sKSaQGzgwtZ9d/dZ8SFzZh1D8txRkAza6SOH7A7034GvViV0H1bYWabDqdjhZ7mdrIN4fKe0IPltBvopMvGi2QWNxrH6akAM8zWE+Fubnv+qxt3O9AorJqJ9P+mDaCKzbGZzSWg5hjRq9w+AG8+RWAxvrAqXB3yWmLIwCTJM5rHuyv3GZ7N919eS1FWYkal7pZC57nk3LyS4Dhd24KpapR9Jn1FQ58737Jvnbbc52gLzY2HIaWUrippALxu2xa+zxGuTTr6KFPoSc43+mh9t6uqHGJIRZwu0bsxs+R4fuyYmpgMcfleaYWysJJBa2611lqbpbLEARVyAHTadt+eT7qCzYmySRpFwXCzgd9hdpuMjlceytMVxKRgb2dnZm7XN2tbZgjvDMbiitwUPWS4W2+ylGlwTG71ObR7BTHCulFPOMiWOsTsPABIAudkg7LvQrnnB6uWXuujtpdrWEW3BxvmbC+Zy91lYMQMBLXn+HvuCAPIOAI8kVuror02osQYXwSWs8MLZBsO2nAloAOtwDaxOhUiXM1DRUgraapje2NrKiB726MDWytc5w+iQAeXlv6XikDgHNIc0gEEEEEHQgjUKD6REQEREBERAREQEREBERAREQERWuIYlDA3ammjibxe5rR8SggnXHiwihZHf6crvJgswHzc78KhH+z9hRkqpKlw/lRk3/5k7rAjmGMd99WfXFjzamQ9k8OZIY443DRzGjacRyLnFe9BOsGPDKZ0TKR0sj5C9zy8MbbZDGDJpPhaD5kqo3H0w6RfJgIo3NE0jSQTmIowbGQjebkNaN5PAFQCrpngnYG1K8XdJISZDfUucR3ctw5DKyj1T0tmnmdUOYzbcQWtvtBg2A3YDstLcsy47yvqXpW90jSHMbtAh4cWsLSM8i8Wsc9Soq1rKdxY9z2DXZbtkOIHhu03AzLSfDv0yUebRgAuJtn5ctFk6iq7Owe8FhcXAP7+YJuAWGxbm7f6qwM0bzm5789oANDW3vlxOXMZKot5e4CToNTw81j5sT2rgNub2BNhdZeZhe5oe0BhdkMu6dk53PtvKp19I1jQGi5LhYn10GpsCf2VUY2KJ7C3K4Jvb6JB7w8rK+hZc3OnDiqUWQaSQSCcgQdHC556W9VlaWhvmTkdLcFFfdHK5uUR2Ab6cDrlolfQWZ2jnONtS7Qjlz8lkqeJjdB6nNY7F6hpNibnhwQVMPgY7Ii4U36vcdko52U7n7dNKbAE37CQnVvBhOo0zvxvDsCjjZazQc7555/2UlxoF1MXsyfEQ9tssgcx5WPwQ1u9FZ4PWCaCKUfPY13qRn8VeKKIiICIiAiIgIiICIiArDGsYhpYzJM/ZG4b3Hg0byr9c8danSZ0078+43usG618ve1z58kF/0w62aiS7adwp49NoZyEfWtl6W8ytaOxF1RM0Oc+V7nAFz3EnM5m5Nzksj0M6DVeLyu7MhkTDaSZ99lp+i0DxOtnYcrkXC2PjvV/h+FQMLS6Wpc7+a92bGAEvLY25AGwGdz3jmg1rj7i+pbGwE9mwNa1oJJkfYABozJuW5BV6Pq9xmfNlFM1p07QtisN2UhB05LOdTuHmrxVszhdrDJOfsdyIfeff7C6SVqOV4qWSF/YTgsc2wO0CbG+ZsM9c+Oa+uk0TYmxujqI5bl1+zIOxs7OTvfQjctodYGKULaomV8TzsjLuvO00G7cvnAAZLUOOYyyokLo4wxoyA8RPNxN7nluQYp9QdeJ5D8gquHVx7QA3sbg68LheMLnHugZAbmc9xFl97coIJJAuMh3RqBo210GYfNYt3d6/eu2+RGmp14K3m25jfIAHZBztk7PmTcW3aK3EmYsDrfSyuKCXu2/rJ93kqo+oqYBrd5vrYbwsu6YNF1jWnuD0/JUayqvpoEFxVYqQLDU/DmsWJM7k+ZVM5qtAPna/R/9v3/AHURdtqngeIsHIXef7D95qqzE3sv/EqLHI98uBByN2ElpHordirgX1Rcbx6qMfhmpGQdq3tY9obF7OLQb3DTnYXsRuU7XOfVK62LwtcMrSlp/rbC8X+44roxRqCIiAiIgIiICIiAiIgFcx9MMKd2srD4o3uY4fVPdd5EZ+RC6cWv+sfoO+pPyqkt24aBJG7JtQwaC+jXgZA6HIHQEBBeqTrBhoGGirB2bC8ujmAJAL7XEgGdt4cOOeWaw/Wz0idLUuDHEXuMt7fCAfRWlNSkTWmgcwwu2pI5G2IdkW2DrXvrrbu33qPVm3PWEvBGdzdWJWzepeWKk7eaaaOGLso2udI5rbu2nFgaXG+Q2yQPpNVv1n9PRUS9nTVLhAGgd3aY2R5PeLgbEt0HDIla0xKrY5xtcnMAZACxsOegWKkG1nnbLmf8ojOvzHePmOY1SGlY5zQ0FoJI/CTf4JRtu1pdmdnfyJbf2AXkldY90Cw1N7egP91RftwpgzBN+OnwCoz0ptYXIuMuW0LkHVVqesc8dzZPmc/wixV2ymkdpG4+TXW97KKxRpxpd3ldUaaTZDb77fqs9/umTUgN8yPyCtoMNiisZHbbmgAA5Ny37O9VFkHO2WixuQLBUpxbLffP0WUZKC7bI8li6o2OYJ8kSqB4cTb31+F1clw0Gn7CoxOu4ZWycfUW/VVHDNCKrCqzHK3Yvt8lhdGkt6noO0xhhGkUc0hO7NoiHxd8F0QtWdRuDCGnkqpMn1BAjvqIGX2T9pxc7y2VtIFSq9REUBERAREQERR/pb0tgoGAvu+R3gibbaI4knwt5+10EgRazi622nxUbh5SA/8AisjS9aVG7xxys9GuHwKJqb1M7Y2ue9wa1oJc45AAZkla2k62R2jgykLo791xk2XFvEt2SBfhdWnT/pcyqjZDTuJjPekJBbtEHussdwtf24KF00AVhrzpfjFXVyOm2TwaxpvsN3AXtfnxJKq9WvQt2IPe6UvjjZtNke3J225vdYzaBFxcOOWVhxVHFa0RjZb4z+EcfNZXqw6Rupalsb5AIJTaQPdZrXEd2S5yBvYE7weQREim6iqIkFtVUjO7rmJxI4DuCxvvzUiw7q3wmlYR8la8kEF8pMjzfeCcmHm0BTNpuLg3G48VF+lNU8A7KNNQdPejcVNJeG7oSMgTcxn6J4jgffnCainY7Ig25Gyn+OCU63N9AopV0pBzbbyVZqyw4th8IJHO39lnGdJXgWETfUkrCFo4r6bEgyFRik0mrg0cGi3xOat2x+p4nNeAtb4iB5kBfJroxpd3kD+ZRFxsrH4nHocuGYV02aV3ghPm79B+quG4LUy+KzRwA/W6Kw9JYEaZHO19HWF/cN91VdHs5E5jLM6jceakMHRF297vTL8lXk6LPcLXv9b9Qgi7n7IucvPJXmEYUal42heMEE/120a3lxPtykdH0JLjeQ3HDM/nl8FNOj+GNpnB2yDxB3+vFBJuitK8NbcWAAsOAG4KXMGStqDYcwOZofhyV2stCIiAiIgIiIKNZNsRvf8ARa53sCVz1iFe6pkMz3do9xu6xHoACcgNwXQ1VHtMc072uHuCFzni/V9XwElje1aNCO663lpf1ViV8OLd9x5i3x0QRArBS1dTAbSte367cvvf5VSLF2HVlubTa/781UZwTtFhexG45FUp8SDe7GNuTc0ZhvN5+aPPVWcdcxwyePJ4H+FdRTW+Zl/TYj2yKIxUtHNcuLgXHM//AFZLBaIuBdI0ZGwGoJ0Jt8FXfI1wIa4B3PIjnYqpNVOazZYyx8LeXPn+75XKDanVfjcszX05YOyp2RtZILg7wGHjYN13W5qX1VA1+oXOWDzTUj+0gmexxN3G/i8wdVvnoLjT6ykbLIQZA57X2Fhdpyy3d0tUalRvF8LDpHWGQJA8hksHW9HQ7ctgVFLdxNt5/NU/kY4IrUtV0OB+b7K0HQkcHLchoBwXgw0cERqen6DsHzFlqXoixvzB7LYzcPHBVRRjghiEwdH2jcr2PBwNylYpRwXppkEaGGjgq8eGgbln20vJVBTIMIygHBVm0XJZgU6qCBB84K2zXDnf3WRVGmZYFVlFEREBERAREQeEK0fSHcVeIgwNbhUbxaSJp8wohi/VlQzXLWGN3FmX5LZhCozUwOmRQaFxbqkqGXNPMHj6Lhn7j9FD6/A6+lPfgkAHzmXc32GfwXT74SNQqEkIdk4AjmFdTHLcWPPHdeA7k4WP79FfxdIYmi/ZuvoBe49CTkPRb1xjoTQ1N+0gbfiAAVCsU6l4XZwTuZyOY+KJiMYRSvq5WRsIDpLd4+Fjd7nch8chvXQeBYbHSwMhiHdaNd73HxPdbeTmof0L6Bx0r2lzzI4AZnSwWwbJVkWr4rm687FXVksirXsV9CFXNksgt+xXvZKvZLIKHZL3slWslkFIRr3YVSyWQfGwvdlfaKDwBeoiAiIgIiICIiAiIgIiIC+DE07gvtEFF9O07rK2dBYq/Xy5t0FCkjtc71cr4Y2y+0BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQeL1EQEREBERAREQEREBERAREQEREBERAREQf//Z" alt=""  />
      <h5>The best Household appliances in the world</h5>
      <Link to="/home">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body" >
        <h2 className="card-title">Watch</h2>
      <img src="https://image.torob.com/base/images/FY/Cp/FYCpn0VV0LP5uFT6.jpg_/280x280.jpg" alt=""  />
      <h5>The best Household appliances in the world</h5> 
      <Link to="watch">
        <a href="#" className="btn btn-primary">More...</a>
        </Link>
      </div>
    </div>
  </div>
  
</div>
    </>
  );
};
export default Shop;
