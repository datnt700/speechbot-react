import React from 'react';

export const InputField = ({
  clickFunction,
}: {
  clickFunction: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="inputField">
      <textarea
        className="area"
        placeholder="Enter your text"
        onChange={(event) => clickFunction(event)}
      ></textarea>
      <p className="description">
        Enter your text above and hit 'play.' You can choose a different voice
        by selecting an option from the dropdown menu.
      </p>
    </div>
  );
};
