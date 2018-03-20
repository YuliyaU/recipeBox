module.exports = {
    "type": "object",
    "properties": {
        "recipies": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {                    
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    }, 
                    "recipeName": {
                        "type": "string"
                    },
                    "ingredients": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "ingredientId": {
                                "type": "number",
                                "unique": true,
                                "minimum": 1
                            },
                            "ingredientName": {
                              "type": "string"
                            }
                          },
                          required: ["ingredientName"]
                        }
                    }                    
                },
                required: ["id", "recipeName", "ingredients"]
            }
        }        
    },
    required: ["recipies"]
};