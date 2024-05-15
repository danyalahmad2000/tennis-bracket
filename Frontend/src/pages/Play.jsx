import React, { useState, useEffect } from "react";

const Play = () => {
  // Define state variables for storing data
  const [groupPlayers, setGroupPlayers] = useState([]);
  const [quarterFinalists, setQuarterFinalists] = useState([]);
  const [semiFinalists, setSemiFinalists] = useState([]);
  const [finalists, setFinalists] = useState([]);
  const [winners, setWinners] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupPlayersResponse = await fetch(
          "http://localhost:15000/groupPlayers"
        );
        const groupPlayersData = await groupPlayersResponse.json();
        setGroupPlayers(groupPlayersData);

        const quarterFinalistsResponse = await fetch(
          "http://localhost:15000/quarterFinal"
        );
        const quarterFinalistsData = await quarterFinalistsResponse.json();
        setQuarterFinalists(quarterFinalistsData);

        const semiFinalistsResponse = await fetch(
          "http://localhost:15000/semiFinal"
        );
        const semiFinalistsData = await semiFinalistsResponse.json();
        setSemiFinalists(semiFinalistsData);

        const finalistsResponse = await fetch("http://localhost:15000/final");
        const finalistsData = await finalistsResponse.json();
        setFinalists(finalistsData);

        const winnerResponse = await fetch("http://localhost:15000/winner");
        const winnersData = await winnerResponse.json();
        setWinners(winnersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to group players by group_id
  const groupPlayersByGroup = () => {
    const groupedPlayers = {};
    groupPlayers.forEach((groupPlayer) => {
      if (!groupedPlayers[groupPlayer.group_id]) {
        groupedPlayers[groupPlayer.group_id] = [];
      }
      groupedPlayers[groupPlayer.group_id].push(groupPlayer);
    });
    return groupedPlayers;
  };

  // Function to group players by group_id for quarter finalists
  const groupPlayersByQuarterFinals = () => {
    const groupedPlayers = {};
    quarterFinalists.forEach((groupPlayer) => {
      if (!groupedPlayers[groupPlayer.group_id]) {
        groupedPlayers[groupPlayer.group_id] = [];
      }
      groupedPlayers[groupPlayer.group_id].push(groupPlayer);
    });
    return groupedPlayers;
  };

  const groupPlayersBySemiFinals = () => {
    const groupedPlayers = {};
    semiFinalists.forEach((groupPlayer) => {
      if (!groupedPlayers[groupPlayer.group_id]) {
        groupedPlayers[groupPlayer.group_id] = [];
      }
      groupedPlayers[groupPlayer.group_id].push(groupPlayer);
    });
    return groupedPlayers;
  };

  const groupPlayersByFinals = () => {
    const groupedPlayers = {};
    finalists.forEach((groupPlayer) => {
      if (!groupedPlayers[groupPlayer.group_id]) {
        groupedPlayers[groupPlayer.group_id] = [];
      }
      groupedPlayers[groupPlayer.group_id].push(groupPlayer);
    });
    return groupedPlayers;
  };

  const groupPlayersByWinners = () => {
    const groupedPlayers = {};
    winners.forEach((groupPlayer) => {
      if (!groupedPlayers[groupPlayer.group_id]) {
        groupedPlayers[groupPlayer.group_id] = [];
      }
      groupedPlayers[groupPlayer.group_id].push(groupPlayer);
    });
    return groupedPlayers;
  };

  // Function to extract player names from groupPlayers
  const extractPlayerNames = () => {
    const names = [];
    groupPlayers.forEach((groupPlayer) => {
      names.push(groupPlayer.name);
    });
    return names;
  };

  // Function to extract quarter finalists' names
  const extractQuarterFinalistNames = () => {
    const names = [];
    quarterFinalists.forEach((quarterFinalist) => {
      names.push(quarterFinalist.name);
    });
    return names;
  };

  // Function to extract semi finalists' names
  const extractSemiFinalistNames = () => {
    const names = [];
    semiFinalists.forEach((semiFinalist) => {
      names.push(semiFinalist.name);
    });
    return names;
  };

  // Function to extract finalists' names
  const extractFinalistNames = () => {
    const names = [];
    finalists.forEach((Finalist) => {
      names.push(Finalist.name);
    });
    return names;
  };

  // Function to extract finalists' names
  const extractWinnerNames = () => {
    const names = [];
    winners.forEach((Winner) => {
      names.push(Winner.name);
    });
    return names;
  };

  // Call the function to extract player names and quarter finalists' names when data changes
  useEffect(() => {
    const playerNames = extractPlayerNames();
    console.log("Player Names:", playerNames);

    const quarterFinalistNames = extractQuarterFinalistNames();
    console.log("Quarter Finalists:", quarterFinalistNames);

    const semiFinalistNames = extractSemiFinalistNames();
    console.log("Semi Finalists:", semiFinalistNames);

    const finalistNames = extractFinalistNames();
    console.log("Finalists:", finalistNames);

    const winnerName = extractWinnerNames();
    console.log("Winner:", winnerName);
  }, [groupPlayers, quarterFinalists, semiFinalists, finalists, winners]);

  return (
    <>
      <div className="w-full h-[980px] flex flex-row">
        <div className="w-3/4 h-full ml-[104px] flex flex-row">
          {/* first column */}
          <div className="w-[244px] h-[980px] py-[60px]">
            <div className="w-full h-[192px] mb-[32px] relative">
              <div className="w-[200px] h-[80px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[0]
                            ][0].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>

                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[0]
                            ][1].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
              <div className="absolute top-[20%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[80%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[50%] right-[-55px] w-[120px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[50%] right-[-55px] w-[60px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>

              <div className="w-[200px] h-[80px] mt-[32px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[0]
                            ][2].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>

                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[0]
                            ][3].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
            </div>

            <div className="w-full h-[192px] mb-[32px] relative ">
              <div className="w-[200px] h-[80px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[1]
                            ][0].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>

                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[1]
                            ][1].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
              <div className="absolute top-[20%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[80%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[50%] right-[-55px] w-[120px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[50%] right-[-55px] w-[60px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>

              <div className="w-[200px] h-[80px] mt-[32px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[1]
                            ][2].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>

                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[1]
                            ][3].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
            </div>

            <div className="w-full h-[192px] mb-[32px] relative">
              <div className="w-[200px] h-[80px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[2]
                            ][0].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>

                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[2]
                            ][1].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
              <div className="absolute top-[20%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[80%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[50%] right-[-55px] w-[120px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[50%] right-[-55px] w-[60px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>

              <div className="w-[200px] h-[80px] mt-[32px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[2]
                            ][2].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>

                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[2]
                            ][3].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
            </div>

            <div className="w-full h-[192px] mb-[32px] relative">
              <div className="w-[200px] h-[80px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[3]
                            ][0].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[3]
                            ][1].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
              <div className="absolute top-[20%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[80%] right-[5px] w-[25px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
              <div className="absolute top-[50%] right-[-55px] w-[120px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[50%] right-[-55px] w-[60px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>

              <div className="w-[200px] h-[80px] mt-[32px]">
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[3]
                            ][2].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
                <div className="w-[200px] h-[36px] mb-[8px] flex flex-row items-center justify-between bg-white border rounded-full">
                  {Object.keys(groupPlayersByGroup()).length > 0 &&
                    /* Get the group ID of the first group */
                    groupPlayersByGroup()[Object.keys(groupPlayersByGroup())[0]]
                      .length > 0 && (
                      /* Render the image and name of the first player */
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the first player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByGroup()[
                              Object.keys(groupPlayersByGroup())[3]
                            ][3].name
                          }
                        </p>
                      </div>
                    )}

                  <div className="size-[22px] rounded-full border border-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
          {/* first column */}

          {/* second column  */}
          <div className="w-[244px] h-[980px] py-[60px] ml-14">
            <div className="w-full h-[192px] mb-[32px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[0]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[0]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[0]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[0]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[0]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[0]
                            ][1].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[49%] right-[-25px] w-[55px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-tr-full"></div>
              <div className="absolute top-[109%] right-[-135px] w-[225px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[105%] right-[-100px] w-[75px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-tr-full"></div>
            </div>

            <div className="w-full h-[192px] mb-[32px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[1]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[1]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[1]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[1]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[1]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[1]
                            ][1].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[51%] right-[-25px] w-[55px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-br-full"></div>
            </div>

            <div className="w-full h-[192px] mb-[32px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[2]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[2]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[2]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[2]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[2]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[2]
                            ][1].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[49%] right-[-25px] w-[55px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-tr-full"></div>
              <div className="absolute top-[109%] right-[-135px] w-[225px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[105%] right-[-100px] w-[75px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-tr-full"></div>
            </div>

            <div className="w-full h-[192px] mb-[32px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[3]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[3]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[3]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersByQuarterFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[3]
                  ] &&
                  groupPlayersByQuarterFinals()[
                    Object.keys(groupPlayersByQuarterFinals())[3]
                  ].length > 1 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByQuarterFinals()[
                              Object.keys(groupPlayersByQuarterFinals())[3]
                            ][1].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[51%] right-[-25px] w-[55px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-br-full"></div>
            </div>
          </div>
          {/* second column  */}

          {/* third column  */}
          <div className="w-[244px] h-[980px] py-[60px] ml-24">
            <div className="w-full h-[192px] mt-[110px] mb-[255px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersBySemiFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[0]
                  ] &&
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[0]
                  ].length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersBySemiFinals()[
                              Object.keys(groupPlayersBySemiFinals())[0]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersBySemiFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[1]
                  ] &&
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[1]
                  ].length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersBySemiFinals()[
                              Object.keys(groupPlayersBySemiFinals())[1]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[49%] right-[-25px] w-[55px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-tr-full"></div>
              <div className="absolute top-[165%] right-[-248px] w-[450px] h-[3px] bg-blue-500 transform -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-[160%] right-[-100px] w-[75px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-tr-full"></div>
            </div>

            <div className="w-full h-[192px] mt-[110px] mb-[255px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersBySemiFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[2]
                  ] &&
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[2]
                  ].length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersBySemiFinals()[
                              Object.keys(groupPlayersBySemiFinals())[2]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersBySemiFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[3]
                  ] &&
                  groupPlayersBySemiFinals()[
                    Object.keys(groupPlayersBySemiFinals())[3]
                  ].length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersBySemiFinals()[
                              Object.keys(groupPlayersBySemiFinals())[3]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[49%] right-[-25px] w-[55px] h-[3px] bg-blue-500 transform -translate-y-1/2 rounded-br-full"></div>
            </div>
          </div>
          {/* third column  */}

          {/* fourth column  */}
          <div className="w-[244px] h-[980px] py-[270px] ml-24">
            <div className="w-full h-[192px] mt-[110px] mb-[255px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersByFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByFinals()[
                    Object.keys(groupPlayersByFinals())[0]
                  ] &&
                  groupPlayersByFinals()[Object.keys(groupPlayersByFinals())[0]]
                    .length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByFinals()[
                              Object.keys(groupPlayersByFinals())[0]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}

                {Object.keys(groupPlayersByFinals()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByFinals()[
                    Object.keys(groupPlayersByFinals())[1]
                  ] &&
                  groupPlayersByFinals()[Object.keys(groupPlayersByFinals())[1]]
                    .length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mb-[8px] bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByFinals()[
                              Object.keys(groupPlayersByFinals())[1]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
              <div className="absolute top-[50%] right-[-50px] w-[75px] h-[3px] bg-blue-500 transform -translate-y-1/2"></div>
            </div>
          </div>
          {/* fourth column  */}

          {/* fifth column  */}
          <div className="w-[244px] h-[980px] py-[270px] ml-12">
            <div className="w-full h-[192px] mt-[110px] mb-[255px] flex items-center relative">
              <div className="w-[200px] h-[80px]">
                {Object.keys(groupPlayersByWinners()).length > 0 &&
                  /* Get the group ID of the first group */
                  groupPlayersByWinners()[
                    Object.keys(groupPlayersByWinners())[0]
                  ] &&
                  groupPlayersByWinners()[Object.keys(groupPlayersByWinners())[0]]
                    .length > 0 && (
                    /* Render the image and name of the second player if available */
                    <div className="w-[200px] h-[36px] mt-5 ml-1 bg-white border rounded-full flex flex-row items-center justify-between">
                      <div className="w-[132px] h-[28px] flex flex-row items-center">
                        {/* Render the second player's name */}
                        <p className="pl-2">
                          {
                            groupPlayersByWinners()[
                              Object.keys(groupPlayersByWinners())[0]
                            ][0].name
                          }
                        </p>
                      </div>
                      <div className="size-[22px] rounded-full border border-gray-500"></div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          {/* fifth column  */}
        </div>
        <button className="w-[130px] h-[50px] bg-blue-500 border rounded-lg text-white text-[22px] font-[700] mt-[40px] mx-auto">
          Play
        </button>
      </div>
    </>
  );
};

export default Play;
