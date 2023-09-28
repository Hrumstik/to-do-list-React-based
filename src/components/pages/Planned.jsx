import NoTaskScreen from "../NoTaskScreen/NoTaskScreen";
import InputField from "../inputField/InputField";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import TaskListItem from "../TaskListItem/TaskListItem";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import useFeatures from "../../hooks/useFeatures";
import useRenderTasks from "../../hooks/useRenderTasks";
import useGroupTasks from "../../hooks/useGroupTasks";

export default function Planned() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const stateOfInput = useSelector((state) => state.input);

  const {
    todayTasks,
    tomorrowTasks,
    dayAfterTommorowTasks,
    nextWeekTasks,
    tasksWithoutDate,
    otherTaks,
    sortedAlphabeticallyTodayTasks,
    importantTodayTasks,
    sortedAlphabeticallyTodayTasksWithImportance,
    sortedAlphabeticallyTomorrowTasks,
    importantTomorrowTasks,
    sortedAlphabeticallyTomorrowTasksWithImportance,
    sortedAlphabeticallyDayAfterTommorowTasks,
    importantDayAfterTommorowTasks,
    sortedAlphabeticallyDayAfterTommorowTasksWithImportance,
    sortedAlphabeticallyNextWeekTasks,
    importantNextWeekTasks,
    sortedAlphabeticallyNextWeekTasksWithImportance,
    sortedAlphabeticallyTasksWithoutDate,
    importantTasksWithoutDate,
    sortedAlphabeticallyTasksWithoutDateWithImportance,
  } = useGroupTasks(tasks);

  const { sortTasksAlphabeticallyState, showImportantTasksState } =
    useFeatures();
  const { renderTasks, checkTheStatusOfTask } = useRenderTasks();

  return (
    <Box sx={{ bgcolor: "background.paper", display: "flex" }}>
      <Menu />
      <Box sx={{ width: "75%" }}>
        <Header
          text="Planned"
          icon={
            <DateRangeOutlinedIcon
              sx={{ fontSize: 40, color: "icons.secondary" }}
            />
          }
        />

        <Container
          sx={{
            height: "86%",
            paddingLeft: 2,
            paddingRight: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {tasks.length || stateOfInput ? (
            <Box sx={{ height: "100%" }}>
              {todayTasks.length && checkTheStatusOfTask(todayTasks) ? (
                <Box>
                  <Typography color="text.primary" variant="h5">
                    Today tasks:
                  </Typography>
                  {sortTasksAlphabeticallyState && !showImportantTasksState
                    ? renderTasks(sortedAlphabeticallyTodayTasks)
                    : !sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(importantTodayTasks)
                    : sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(sortedAlphabeticallyTodayTasksWithImportance)
                    : renderTasks(todayTasks)}
                </Box>
              ) : null}

              {tomorrowTasks.length && checkTheStatusOfTask(tomorrowTasks) ? (
                <Box>
                  <Typography color="text.primary" variant="h5">
                    Tomorrow tasks:
                  </Typography>
                  {sortTasksAlphabeticallyState && !showImportantTasksState
                    ? renderTasks(sortedAlphabeticallyTomorrowTasks)
                    : !sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(importantTomorrowTasks)
                    : sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(
                        sortedAlphabeticallyTomorrowTasksWithImportance
                      )
                    : renderTasks(tomorrowTasks)}
                </Box>
              ) : null}

              {dayAfterTommorowTasks.length &&
              checkTheStatusOfTask(dayAfterTommorowTasks) ? (
                <Box>
                  <Typography color="text.primary" variant="h5">
                    Day after tomorrow tasks:
                  </Typography>
                  {sortTasksAlphabeticallyState && !showImportantTasksState
                    ? renderTasks(sortedAlphabeticallyDayAfterTommorowTasks)
                    : !sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(importantDayAfterTommorowTasks)
                    : sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(
                        sortedAlphabeticallyDayAfterTommorowTasksWithImportance
                      )
                    : renderTasks(dayAfterTommorowTasks)}
                </Box>
              ) : null}

              {nextWeekTasks.length && checkTheStatusOfTask(nextWeekTasks) ? (
                <Box>
                  <Typography color="text.primary" variant="h5">
                    Next week tasks:
                  </Typography>
                  {sortTasksAlphabeticallyState && !showImportantTasksState
                    ? renderTasks(sortedAlphabeticallyNextWeekTasks)
                    : !sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(importantNextWeekTasks)
                    : sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(
                        sortedAlphabeticallyNextWeekTasksWithImportance
                      )
                    : renderTasks(nextWeekTasks)}
                </Box>
              ) : null}

              {tasksWithoutDate.length &&
              checkTheStatusOfTask(tasksWithoutDate) ? (
                <Box>
                  <Typography color="text.primary" variant="h5">
                    Tasks without date:
                  </Typography>
                  {sortTasksAlphabeticallyState && !showImportantTasksState
                    ? renderTasks(sortedAlphabeticallyTasksWithoutDate)
                    : !sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(importantTasksWithoutDate)
                    : sortTasksAlphabeticallyState && showImportantTasksState
                    ? renderTasks(
                        sortedAlphabeticallyTasksWithoutDateWithImportance
                      )
                    : renderTasks(tasksWithoutDate)}
                </Box>
              ) : null}

              {otherTaks.length ? (
                <Box>
                  {otherTaks.map((task, i) => {
                    if (!task.done) {
                      return (
                        <>
                          <Typography color="text.primary" variant="h5">
                            Task for the date {task.date}:
                          </Typography>
                          <TaskListItem text={task.name} key={i} />
                        </>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Box>
              ) : null}
            </Box>
          ) : (
            <NoTaskScreen
              firstTitle="You"
              secondTitle="don't have any"
              thirdTitle="planned tasks."
              icon={
                <SentimentSatisfiedIcon
                  sx={{
                    fontSize: 300,
                    display: "flex",
                    alignSelf: "center",
                    color: "icons.secondary",
                  }}
                />
              }
            />
          )}

          <InputField />
        </Container>
      </Box>
    </Box>
  );
}
