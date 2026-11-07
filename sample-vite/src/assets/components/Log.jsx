export const Log = (props) => {

    const {logs} = props;

    return (
        <>  
            {logs.map((log, index) => {
                return (
                    <div key={index}>
                        <p>{log.title} {log.time}時間</p>
                    </div>
                )
            })}

        </>
    )
}