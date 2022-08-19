import React, { useState } from 'react'

export default function Text() {
  const [text, setText] = useState("");
	const [op, setOp] = useState("");
	function clearAll() {
		setText("");
		setOp("");
	}
	
	const handleChangeText = (event) => {
		setText(event.target.value);
	}

	const PerformOperationOnText = (text, op) => {
		setOp(op);
		switch(op) {
			case 'UpperCase':
				setText(text.toUpperCase());
			break;
			case 'LowerCase':
				setText(text.toLowerCase());
			break;
			case 'String':
				setText(text.toString());
			break;
			case 'Trim':
				setText(text.trim());
			break;

			default:
				setText(text);
		}
  }

  return (
    <div className="justify-center body-content">
        <div className="row">
            <div>
				<h1 className="float-start text-start">Enter text below: {!op ? "" : op.toUpperCase() + " operation performed" }</h1> 
				<button className="mt-3 float-end btn btn-outline-danger btn-sm" onClick={() => { clearAll() }}><b>Clear</b></button>
			</div>
            <textarea 
                className="form-control"
                rows="8"
                value={text}
                onChange={handleChangeText}
            ></textarea>
        </div>
        <div className="row py-1">
            <div className="col-md-2 p-1">
                <button disabled={text.length > 0 ? false : true} className="btn btn-outline-primary w-100 btn-md" onClick={() => { PerformOperationOnText(text, 'UpperCase') }}>UpperCase</button>
            </div>
            <div className="col-md-2 p-1">
                <button disabled={text.length > 0 ? false : true} className="btn btn-outline-primary w-100 btn-md" onClick={() => { PerformOperationOnText(text, 'LowerCase') }}>LowerCase</button>
            </div>
			<div className="col-md-2 p-1">
                <button disabled={text.length > 0 ? false : true} className="btn btn-outline-primary w-100 btn-md" onClick={() => { PerformOperationOnText(text, 'String') }}>Convert in String</button>
            </div>
			<div className="col-md-2 p-1">
                <button disabled={text.length > 0 ? false : true} className="btn btn-outline-primary w-100 btn-md" onClick={() => { PerformOperationOnText(text, 'Trim') }}>Trim Spaces</button>
            </div>
        </div>

		<div>
			<p className="text-start">{ text.length === 0 ? text.length + " words and " + text.length + " characters" : text.split(' ').length + " words and " + text.length + " characters"}</p>
			<p className="text-start">{ text.length === 0 ? 0.000 + " minutes to read" : (0.008 * text.split(' ').length) + " minutes to read" }</p>
		</div>
    </div>
  );
}
