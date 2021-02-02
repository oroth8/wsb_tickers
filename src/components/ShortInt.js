import React from "react";

const ShortInt = () => {
  return (
    <div>
      <p>Short interest info update 2/2 8:45AM ET: </p>
      <p>
        Short interest data is being manipulated. Short intrest float is 55%
        lets make that clear. However, S3 head is redefining share float to
        include shares that don't exist in order to be able to say shorted % of
        float is lower.it reduces the traditional SI % Float, Instead of Shares
        Shorted/Float our calc is Shares Shorted/ (Float + Shares Shorted) So,
        by this definition, if a stock is shorted 400% of existing shares (total
        banana count borrowed and resold 4x) and total shares is 100, short % is
        calculated like this: 400 shorts / (100 shares + 400 longs whose shares
        are borrowed) = 0.8 That is, the normal way we define short % would say
        it's 400% shorted. S3's way says 80%. Knowing this formula, we can work
        back to what S3 would have said the short % of float was using the
        normal definition of short % of float: 55% short of float means for all
        existing shares + shorts (or, ont he other side of the trade "longs
        whose shares were borrowed away to short") is 55/45 as much as existing
        shares. Meaning, portion of shares short by the normal definition (% of
        existing bananas borrowed) is 55/45 = 1.22 That is, S3's data is telling
        them that after friday trading, GME is still 122% short.
      </p>
      <p style={{ color: "white" }}>
        TLDR: Definition of short int. floats was changed to show a lower
        percent (55%) according to S3. Normal definition math comes out to 122%
        short.
      </p>
      <a
        href="https://www.reddit.com/r/wallstreetbets/comments/laoaru/read_this_they_are_screwed_numbers_dont_lie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </div>
  );
};

export default ShortInt;
