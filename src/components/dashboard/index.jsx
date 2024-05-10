import { Box, Typography } from "@mui/material";


import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "./charts/Header";
import StatBox from "./charts/StatBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";

import { AuthContext } from "../../context/AuthContext";
import { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { server_uri } from "../../config/config";

const Dashboard = () => {
  
 

  const { currentUser } = useContext(AuthContext)
  const [data, setData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${server_uri}/profile`, {
          headers: {
            Authorization: `Bearer ${currentUser}`
          },
        });
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.nbrConnexion ? data.nbrConnexion : 0}
            subtitle="Connections"
            progress="0.75"
            icon={
              <PersonAddIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                  
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.departements ? data.departements.length : 0}
            subtitle="Departements"
            progress="0.50"
            icon={
              <BusinessCenterIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                 
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.formations ? data.formations.length : 0}
            subtitle="Formations"
            progress="0.30"
            icon={
              <SchoolIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                 
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.competences ? data.competences.length : 0}
            subtitle="Competences"
            progress="0.80"
            icon={
              <EqualizerIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.certificates ? data.certificates.length : 0}
            subtitle="Certificates"
            progress="0.50"
            icon={
              <VerifiedUserIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                 
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.notes ? data.notes.length : 0}
            subtitle="Notes"
            progress="0.50"
            icon={
              <AssignmentIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                  
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#0C6FA6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title={data?.teams ? data.teams.length : 0}
            subtitle="Teams"
            progress="0.50"
            icon={
              <GroupIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                
                }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
 {data?.departements?.length >0 &&
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#0C6FA6"
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid rgb(255,255,255,.7)`}
            p="15px"
          >
            <Typography color="rgb(255,255,255,.8)" variant="h5" fontWeight="600">
            Departements
            </Typography>
          </Box>
          {data?.departements?.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid rgb(255,255,255,.3)`}
              p="15px"
              color="rgb(255,255,255,.8)"
            >
              <Box>
                <Typography

                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.nomDepart}
                </Typography>
                <Typography color="black">
                  {transaction.chefDepart.firstname}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
}
{data?.formations?.length >0 && 
     <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#0C6FA6"
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid rgb(255,255,255,.7)`}
            p="15px"
          >
            <Typography color="rgb(255,255,255,.8)" variant="h5" fontWeight="600">
              Formations
            </Typography>
          </Box>
          {data?.formations?.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid rgb(255,255,255,.3)`}
              p="15px"
              color="rgb(255,255,255,.8)"
            >
              <Box>
                <Typography

                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.nom}
                </Typography>
                <Typography color="black">
                  {transaction.createdBy.firstname}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
}
{data?.competences?.length >0 && 
       <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#0C6FA6"
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid rgb(255,255,255,.7)`}
            p="15px"
          >
            <Typography color="rgb(255,255,255,.8)" variant="h5" fontWeight="600">
              Competences
            </Typography>
          </Box>
          {data?.competences?.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid rgb(255,255,255,.3)`}
              p="15px"
              color="rgb(255,255,255,.8)"
            >
              <Box>
                <Typography

                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.titre}
                </Typography>
                <Typography color="black">
                  {transaction.teamLeader.firstname}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
}

{data?.certificates?.length >0 && 
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#0C6FA6"
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid rgb(255,255,255,.7)`}
            p="15px"
          >
            <Typography color="rgb(255,255,255,.8)" variant="h5" fontWeight="600">
              Certificates
            </Typography>
          </Box>
          {data?.certificates?.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid rgb(255,255,255,.3)`}
              p="15px"
              color="rgb(255,255,255,.8)"
            >
              <Box>
                <Typography

                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.fileName}
                </Typography>
                <Typography color="black">
                  {transaction.user.firstname}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
}
{data?.notes?.length >0 && 
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#0C6FA6"
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid rgb(255,255,255,.7)`}
            p="15px"
          >
            <Typography color="rgb(255,255,255,.8)" variant="h5" fontWeight="600">
              Notes
            </Typography>
          </Box>
          {data?.notes?.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid rgb(255,255,255,.3)`}
              p="15px"
              color="rgb(255,255,255,.8)"
            >
              <Box>
                <Typography

                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.noteAssigne}
                </Typography>
                <Typography color="black">
                  {transaction.competence.titre}
                </Typography>
                <Typography color="black">
                  {transaction.teamLeader.titre}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
}
{data?.teams?.length >0 && 
     <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#0C6FA6"
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid rgb(255,255,255,.7)`}
            p="15px"
          >
            <Typography color="rgb(255,255,255,.8)" variant="h5" fontWeight="600">
              Teams
            </Typography>
          </Box>
          {data?.teams?.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid rgb(255,255,255,.3)`}
              p="15px"
              color="rgb(255,255,255,.8)"
            >
              <Box>
                <Typography

                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.nom}
                </Typography>
                <Typography color="black">
                  {transaction.teamLeader.firstname}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
}
      </Box>
    </Box>
  );
};

export default Dashboard;
