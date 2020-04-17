const Statement = (executer, visualiser) => ({
    execute: executer,
    visualise: visualiser,
});

const For_loop = ([intializer, while_condition, post_statement], body) => Statement(
    () => {
        for(intializer.execute(); while_condition.eval(); post_statement.execute()) {
            body.execute();
        }
    },
    () => "for(" +
        intializer.visualise() + " " +
        while_condition.visualise() + " " +
        post_statement.visualise + ") " +
        body.visualise()
)