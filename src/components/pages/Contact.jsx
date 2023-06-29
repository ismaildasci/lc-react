import React from 'react';

export default function Contact() {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container">
      <div className="issues-container">
        <div className="issues-heading">
          <a href="#">facebook / create-react-app</a>
          <div className="open-closed-buttons">
            <button>
              <svg
                className="open"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                ></path>
              </svg>
              <span className="font-bold">96 Open</span>
            </button>
            <button>
              <svg
                className="closed"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                ></path>
              </svg>
              <span className="">254 Closed</span>
            </button>
          </div>
        </div>
        <div className="issues-table">
          {fakeArray.map(item => (
            <div key={item} className="issues-entry">
              <div className="issues-entry-title-container">
                <svg
                  className="open"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                  ></path>
                </svg>
                <div className="issues-title">
                  <a href="#">
                    Issue with running single test with jest command
                  </a>
                  <div className="issues-title-details">
                    #11185 opened 10 hours ago by B3nnyL
                  </div>
                </div>
              </div>
              <a href="#" className="comments-count-container">
                <svg
                  className="octicon octicon-comment v-align-middle"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                  ></path>
                </svg>
                <div class="comments-count">21</div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="comments-container">
        <h2>
          [DevTools] Improve named hooks detection <span>#21782</span>
        </h2>
        <div class="issue-details">
          <a href="">bvaughn</a> opened this issue 6 days ago
        </div>

        <div className="comment-container">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/69965670?s=88&v=4"
              alt="avatar"
              className="avatar"
            />
          </a>
          <div className="comment">
            <div className="comment-heading">
              <a href="#">mdaj06</a> commented 4 days ago
            </div>
            <div className="comment-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              sint optio et sit nemo expedita excepturi corrupti delectus? Unde
              nemo eos quo, similique minima, maiores perspiciatis deserunt,
              eligendi eum consequuntur vero quam non laboriosam illum ipsam ex
              pariatur voluptatum. Cumque itaque dolores nostrum optio
              perspiciatis quibusdam voluptatibus animi tempore labore.
            </div>
          </div>
        </div>

        <div className="border"></div>

        {fakeArray.map(item => (
          <div key={item} className="comment-container">
            <a href="#">
              <img
                src="https://avatars.githubusercontent.com/u/69965670?s=88&v=4"
                alt="avatar"
                className="avatar"
              />
            </a>
            <div className="comment">
              <div className="comment-heading">
                <a href="#">mdaj06</a> commented 4 days ago
              </div>
              <div className="comment-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                sint optio et sit nemo expedita excepturi corrupti delectus?
                Unde nemo eos quo, similique minima, maiores perspiciatis
                deserunt, eligendi eum consequuntur vero quam non laboriosam
                illum ipsam ex pariatur voluptatum. Cumque itaque dolores
                nostrum optio perspiciatis quibusdam voluptatibus animi tempore
                labore.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
