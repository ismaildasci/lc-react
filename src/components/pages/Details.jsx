import React from 'react';

export default function Details() {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint
            optio et sit nemo expedita excepturi corrupti delectus? Unde nemo
            eos quo, similique minima, maiores perspiciatis deserunt, eligendi
            eum consequuntur vero quam non laboriosam illum ipsam ex pariatur
            voluptatum. Cumque itaque dolores nostrum optio perspiciatis
            quibusdam voluptatibus animi tempore labore.
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
              sint optio et sit nemo expedita excepturi corrupti delectus? Unde
              nemo eos quo, similique minima, maiores perspiciatis deserunt,
              eligendi eum consequuntur vero quam non laboriosam illum ipsam ex
              pariatur voluptatum. Cumque itaque dolores nostrum optio
              perspiciatis quibusdam voluptatibus animi tempore labore.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
