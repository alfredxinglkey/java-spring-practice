package com.smee.edi.controllers;

import com.smee.edi.models.Recipe;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Api(value = "EDI Controller")
@RestController
@RequestMapping("edi")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EDIController {

    //region Fields
    private static final String recipePath = "/Users/onenx/Documents/TestEDI/";
    //endregion

    //region APIS
    @ApiOperation(value = "Retrieve sbc files from a certain path.")
    @GetMapping("recipe")
    @ResponseBody
    public List<Recipe> retrieveRecipes() {
        List<Recipe> recipes = new ArrayList<>();
        File dir = new File(recipePath);
        File[] files = dir.listFiles();
        if (files != null) {
            for (int i = 1; i < files.length; i++) {
                File file = files[i];
                Recipe recipe = new Recipe();
                recipe.No = i;
                recipe.Name = file.getName();
                recipe.UpdateAt = file.lastModified();
                recipe.IsValid = i % 5 == 0;
                recipes.add(recipe);
            }
        }
        return recipes;
    }

    @ApiOperation(value = "Upload a sbc file to the certain path.")
    @PostMapping("recipe")
    @ResponseBody
    public Recipe uploadRecipe(MultipartFile uploadFile, HttpServletRequest request){
        //TODO:
        return new Recipe();
    }

    @ApiOperation(value = "Delte a sbc file from the certain path.")
    @DeleteMapping("recipe")
    @ResponseBody
    public int delete(String recipeNames){
        String[] names = recipeNames.split(",");
        int deletedCount = 0;

        for (String name:
                names) {
            File file = new File(recipePath + name);
            if (file.exists()){
                boolean isDeleted = file.delete();
                if (isDeleted){
                    deletedCount++;
                }
            }
        }

        return deletedCount;
    }

    @ApiOperation(value = "Downlaod the specific sbc file.")
    @GetMapping("recipe/download")
    @ResponseBody
    public void downloadRecipe(String fileNames){

    }

    //endregion

    //region Private Methods

    //endregion

}
