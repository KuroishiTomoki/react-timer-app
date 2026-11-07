export const Log = (props) => {

    const {records} = props;

    return (
        <>  
            {records.map((record, index) => {
                return (
                    <div key={index}>
                        <p>{record.title} {record.time}時間</p>
                    </div>
                )
            })}

        </>
    )
}