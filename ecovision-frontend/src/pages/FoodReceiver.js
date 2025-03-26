import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";

const FoodReceiver = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchAvailableFood();
  }, []);

  const fetchAvailableFood = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/food-donations/available");
      const data = await response.json();
      setDonations(data);
    } catch (error) {
      console.error("Error fetching food donations:", error);
    }
  };

  const claimFood = async (id) => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      alert("You must be logged in to claim food.");
      return;
    }

    const user = JSON.parse(userData);
    const receiverId = user._id;
    const token = user.token;

    if (!receiverId || !token) {
      alert("You must be logged in to claim food.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/food-donations/claim/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ receiverId })
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        fetchAvailableFood(); // Refresh the list after claiming
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error claiming food:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Available Food Donations
      </Typography>
      {donations.length === 0 ? (
        <Typography>No available donations at the moment.</Typography>
      ) : (
        <Grid container spacing={3}>
          {donations.map((donation) => (
            <Grid item xs={12} sm={6} md={4} key={donation._id}> {/* ✅ Makes 3 cards in a row on larger screens */}
              <Card style={{ padding: "10px", maxWidth: "100%", height: "100%" }}> {/* ✅ Uniform Card Size */}
                <CardMedia
                  component="img"
                  height="200"
                  image={`http://localhost:5000${donation.foodImage}`}
                  alt={donation.itemName}
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">{donation.itemName}</Typography>
                  <Typography><strong>Donor Name:</strong> {donation.fullName}</Typography>
                  <Typography><strong>Contact:</strong> {donation.contactNumber}</Typography>
                  <Typography><strong>Food Type:</strong> {donation.foodType}</Typography>
                  <Typography><strong>Weight:</strong> {donation.weight}</Typography>
                  <Typography><strong>Cooking Date:</strong> {new Date(donation.cookingDate).toLocaleDateString()}</Typography>
                  <Typography><strong>Expiry Date:</strong> {new Date(donation.expiryDate).toLocaleDateString()}</Typography>
                  <Typography><strong>Storage Instructions:</strong> {donation.storageInstructions}</Typography>
                  <Typography><strong>Pickup Address:</strong> {donation.pickupAddress}</Typography>

                  {donation.status === "claimed" ? ( // ✅ If already claimed, disable button
                    <Button variant="contained" color="secondary" disabled>
                      Already Claimed
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" onClick={() => claimFood(donation._id)}>
                      Claim Food
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default FoodReceiver;
