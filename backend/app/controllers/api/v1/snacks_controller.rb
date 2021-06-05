class Api::V1::SnacksController < ApplicationController
    # GET /snacks
    def index
        snacks = Snack.all

        render json: snacks
    end
end
