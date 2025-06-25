function Form() {
    return (
        <div className="section-form">
            <p>Booking a table !</p>
            <form className="form">
                <input
                    type="text"
                    aria-label="name"
                    placeholder="Your name"
                    minLength={3}
                    required
                />
                <input
                    type="text"
                    aria-label="phone"
                    placeholder="Your phone"
                    minLength={5}
                    required
                />
                <input
                    type="email"
                    aria-label="email"
                    placeholder="example@gmail.com"
                    required
                />
                <select
                    name="table"
                    id=""
                    aria-label="table"
                >
                    <option value="1">table</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                </select>
            </form>
        </div>
    );
}

export default Form;
