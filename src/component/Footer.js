import React from 'react'
import "../asset/css/footer.css"
import appLogo from "../asset/images/AvidBikers.png";

function Footer() {
    return (
            <footer>
      <div className="flex-left">
        <img src={appLogo} alt="logo" />
        <p>
          MIDDLEEND offers all kinds of products and brands in our online store.
          You can also sort through a list of both old and new products
        </p>
      </div>
      <div className="flex-right">
        <div className="navigation">
          <h3>navigation</h3>
          <li><button>home</button></li>
          <li><button>category</button></li>
          <li><button>brands</button></li>
        </div>
        <div className="navigation">
          <h3>links</h3>
          <li><button>shopping</button></li>
          <li><button>returns</button></li>
          <li><button>rules</button></li>
          <li><button>help</button></li>
          <li><button>contract</button></li>
        </div>
        <div className="navigation">
          <h3>account</h3>
          <li><button>favourite (0)</button></li>
          <li><button>cart (0)</button></li>
          <li><button>my account</button></li>
          <li><button>log out</button></li>
        </div>
      </div>
    </footer>
       )
}

export default Footer
