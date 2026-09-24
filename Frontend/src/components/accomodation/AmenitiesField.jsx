import React from "react";

const initialamenities = [
 { id: "wifi", value: "wifi", checked: false, icon: "wifi" },
  {
    id: "kitchen",
    value: "kitchen",
    checked: false,
    icon: "kitchen",
  },
  {
    id: "parking",
value: "free parking on premises",
    checked: false,
    icon: "garage_home",
  },
  {
    id: "washingmachine",
    value: "washing machine",
    icon: "local_laundry_service",
    checked: false,
  },
  { id: "tv", value: "tv", checked: false, icon: "tv" },
  { id: "pool", value: "pool", checked: false, icon: "pool" },
  { id: "ac", value: "air conditioning", checked: false, icon: "air" },
  { id: "hottub", value: "hot tub", checked: false, icon: "hot_tub" },
{ id: "gym", value: "gym", checked: false, icon: "fitness_center" },
];

const AmenitiesField = ({ form }) => {
  return (
    <div className="perks-container">
      <h4 className="perks-header">Amenities</h4>
      <p className="form-paras">Select perks</p>

      <form.Field name="amenities">
        {(field) => (
          <div className="perks row">
            {initialamenities.map((amenity) => (
              <div
                key={amenity.id}
                className={`${amenity.id}-box checkbox-container col-sm-12 col-md-3 col-lg-2`}
              >
                <input
                  type="checkbox"
                  checked={field.state.value.some(
                    (item) => item.name === amenity.value
                  )}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const currentAmenities = field.state.value || [];

                    if (isChecked) {
                      field.handleChange([
                        ...currentAmenities,
                        { name: amenity.value, icon: amenity.icon },
                      ]);
                    } else {
                      field.handleChange(
                        currentAmenities.filter(
                          (item) => item.name !== amenity.value
                        )
                      );
                    }
                  }}
                />
                <span className="material-symbols-outlined">
                  {amenity.icon}
                </span>
                <span>{amenity.value}</span>
              </div>
            ))}
          </div>
        )}
      </form.Field>
    </div>
  );
};

export default AmenitiesField;
